import React, { useEffect } from 'react';
import Container from '../../../Bits/Container/Container';
import { useStyles } from './EditorTabsStyles';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import { IconButton } from '@mui/material';
import { Add as NewTab, Close as CloseTab } from '@mui/icons-material';

const EditorTabs = ({
  width,
  storageKey,
  readOnly,
  newTab,
  tabs,
  setTabs,
  tabIndex,
  setTabIndex,
  refresh,
  setRefresh,
}) => {
  const { classes } = useStyles({ width });
  const { getValue, setValue } = useLocalStorage();

  useEffect(() => {
    setTabs(JSON.parse(getValue(storageKey)));
  }, [tabIndex, refresh]);

  const setActive = (e, index) => {
    const targs = ['svg', 'path', 'BUTTON'];
    if (targs.includes(e.target.tagName)) {
      return;
    }
    setTabIndex(index);
    for (var i = 0; i < tabs.length; i++) {
      if (i === index) {
        tabs[i].active = true;
      } else {
        tabs[i].active = false;
      }
    }
    setValue(storageKey, JSON.stringify(tabs));
  };

  const closeTab = (index) => {
    let existingTabs = JSON.parse(getValue(storageKey));
    let activeTabIndex = existingTabs.map((tab) => tab.active);
    activeTabIndex = activeTabIndex.indexOf(true);

    // if closing the active tab, need to set a new active tab
    if (existingTabs[index].active) {
      existingTabs.splice(index, 1);
      if (existingTabs[index]) {
        existingTabs[index].active = true;
      } else if (existingTabs.length === 0) {
        existingTabs = [
          {
            name: 'tab1',
            value: '',
            active: true,
          },
        ];
      } else {
        existingTabs[index - 1].active = true;
      }
    } else {
      // tab you clicked isn't active, so just splice
      existingTabs.splice(index, 1);
    }

    setValue(storageKey, JSON.stringify(existingTabs));
    setTabIndex(activeTabIndex - 1);
    setRefresh(!refresh);
  };

  if (!tabs) {
    return null;
  }

  return (
    <Container lay={{ x: 'start', y: 'center', p: '0' }}>
      <Container
        className={classes.editorTabs}
        lay={{ x: 'start', y: 'center', p: '0' }}
      >
        {tabs.map((p, i) => (
          <div key={i} className={classes.tabContainer}>
            <span
              key={i}
              onClick={(e) => setActive(e, i)}
              className={
                p.active
                  ? `${classes.editorTab} ${classes.editorTabActive} no-select`
                  : `${classes.editorTab} no-select`
              }
            >
              {p.name}
              {!readOnly && (
                <IconButton
                  size="small"
                  className={classes.closeTab}
                  onClick={() => closeTab(i)}
                >
                  <CloseTab sx={{ fontSize: '11px' }} />
                </IconButton>
              )}
            </span>
            {!readOnly && <span className={classes.separator}></span>}
            {readOnly && <span className={classes.bookend}></span>}
          </div>
        ))}
      </Container>
      {!readOnly && (
        <IconButton size="small" className={classes.newTab} onClick={newTab}>
          <NewTab sx={{ fontSize: '18px' }} />
        </IconButton>
      )}
    </Container>
  );
};

export default EditorTabs;
