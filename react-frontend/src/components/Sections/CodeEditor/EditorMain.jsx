import React, { useEffect, useState, useRef } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { defineTheme } from './defineTheme';
import EditorToolbar from './EditorToolbar/EditorToolbar';
import EditorTabs from './EditorTabs/EditorTabs';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import Container from '../../Bits/Container/Container';

let defaultTheme = {};
defineTheme('oceanic-next').then(
  (_) => (defaultTheme = { value: 'oceanic-next', label: 'Oceanic Next' })
);

const EditorMain = ({ width, storageKey, readOnly = false }) => {
  const { getValue, setValue } = useLocalStorage();
  const monacoRef = useRef();
  const [code, setCode] = useState('');
  const [tabs, setTabs] = useState(JSON.parse(getValue(storageKey)));
  const [tabIndex, setTabIndex] = useState(
    getValue(storageKey)
      ? JSON.parse(getValue(storageKey))
          .map((tab) => tab.active)
          .indexOf(true)
      : 0
  );
  const [refresh, setRefresh] = useState(false);

  const getLocalStorage = () => {
    let item = JSON.parse(getValue(storageKey));
    let active = item[tabIndex];
    setCode(active.value);
  };

  const handleEditorDidMount = (editor, monaco) => {
    monacoRef.current = editor;
  };

  useEffect(() => {
    // create a blank tab if nothing stored in localstorage
    if (!getValue(storageKey)) {
      const blankTab = [
        {
          name: readOnly ? 'Results' : 'tab1',
          value: '',
          active: true,
        },
      ];
      setValue(storageKey, JSON.stringify(blankTab));
    }

    // initial tab index
    let tabValues = JSON.parse(getValue(storageKey));
    tabValues = tabValues.map((tab) => tab.active);
    setTabIndex(tabValues.indexOf(true));

    // listener for when localstorage changes
    if (readOnly) {
      window.addEventListener('storage', getLocalStorage);
    }
    return () => {
      if (readOnly) {
        window.removeEventListener('storage', getLocalStorage);
      }
    };
  }, []);

  useEffect(() => {
    const tabValues = JSON.parse(getValue(storageKey));
    const tabValue = tabValues.filter((tab) => tab.active)[0];
    setCode(tabValue.value);
  }, [tabIndex, refresh]);

  const [theme, setTheme] = useState(defaultTheme);
  const [language, setLanguage] = useState('json');

  const handleEditorChange = (value) => {
    setCode(value);
    let storedItems = JSON.parse(getValue(storageKey));
    storedItems[tabIndex].value = value;
    setValue(storageKey, JSON.stringify(storedItems));
  };

  useEffect(() => {
    defineTheme('oceanic-next').then((_) =>
      setTheme({ value: 'oceanic-next', label: 'Oceanic Next' })
    );
  }, [window.location]);

  useEffect(() => {
    setTabs(JSON.parse(getValue(storageKey)));
  }, [code]);

  const newTab = () => {
    let existingTabs = JSON.parse(getValue(storageKey));

    // get name for new tab
    let tabNames = existingTabs.map((tab) => tab.name);
    let newName = '';
    for (var i = 1; i <= tabNames.length + 1; i++) {
      if (tabNames.indexOf(`tab${i}`) === -1) {
        newName = `tab${i}`;
        break;
      }
    }

    // set all other tab to inactive
    for (var i = 0; i < existingTabs.length; i++) {
      existingTabs[i].active = false;
    }

    // new tab object
    let newOne = {
      name: newName,
      value: '',
      active: true,
    };

    // push the new tab & set local storage
    existingTabs.push(newOne);
    setValue(storageKey, JSON.stringify(existingTabs));
    setTabIndex(existingTabs.length - 1);
  };

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <EditorTabs
        width={width}
        storageKey={storageKey}
        readOnly={readOnly}
        newTab={newTab}
        tabs={tabs}
        setTabs={setTabs}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <EditorToolbar
        width={width}
        storageKey={storageKey}
        readOnly={readOnly}
        newTab={newTab}
        code={code}
        setCode={setCode}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        monacoRef={monacoRef}
      />
      <div id="test-container" style={{ width: width }}>
        <Editor
          height="70vh"
          width={'100%'}
          language={language || 'json'}
          value={code}
          theme={theme.value}
          defaultValue=""
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
        />
      </div>
    </Container>
  );
};
export default EditorMain;
