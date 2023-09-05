import React, { useState } from 'react';
import Container from '../../../Bits/Container/Container';
import { useStyles } from './EditorToolbarStyles';
import {
  AddBox as Create,
  AutoAwesome as Prettify,
  ContentCopy as Copy,
  Download,
  ElectricBolt as Transact,
  FolderOpen as Open,
  NoteAdd as New,
  Save,
  Search as Query,
} from '@mui/icons-material';

import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import EditorToolbarItem from './EditorToolbarItem';
import axios from 'axios';
import LedgerSelect from '../LedgerSelect/LedgerSelect';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const circularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const EditorToolbar = ({
  width,
  storageKey,
  readOnly,
  newTab,
  code,
  setCode,
  tabIndex,
  setTabIndex,
  monacoRef,
}) => {
  const { classes } = useStyles({ width });
  const { getValue, setValue } = useLocalStorage();
  const [ledger, setLedger] = useState(getValue('activeLedger') || '');

  const todo = (message) => {
    console.log(`TODO: ${message}`);
  };

  const transact = () => {
    console.log('transact!');
    let url = '/transact';

    const requestBody =
      ledger === '<no ledger>'
        ? JSON.parse(clean(code))
        : {
            ledger: ledger,
            txn: JSON.parse(clean(code)),
          };

    axios.post(url, requestBody).then((res) => {
      console.log(res.data);
      let resultBody = [
        {
          name: 'Results',
          value: JSON.stringify(res.data, null, 2),
          active: true,
        },
      ];
      setValue('responseValues', JSON.stringify(resultBody, null, 2));
      window.dispatchEvent(new Event('storage'));
    });
  };

  const notify = () =>
    toast('Copied!', {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: 'success',
      theme: 'colored',
    });

  const clean = (val) => {
    return val.replace(
      /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
      (m, g) => (g ? '' : m)
    );
  };

  const query = () => {
    console.log('query!');
    let url = '/query';

    const requestBody =
      ledger === '<no ledger>'
        ? JSON.parse(clean(code))
        : {
            ledger: ledger,
            query: JSON.parse(clean(code)),
          };

    console.log(requestBody);

    axios
      .post(url, requestBody)
      .then((res) => {
        console.log(res.data);
        let resultBody = [
          {
            name: 'Results',
            value: JSON.stringify(res.data, null, 2),
            active: true,
          },
        ];
        setValue('responseValues', JSON.stringify(resultBody, null, 2));
        window.dispatchEvent(new Event('storage'));
      })
      .catch((e) => {
        console.warn(e.response.data);
        let resultBody = [
          {
            name: 'Results',
            value: JSON.stringify(e.response.data, null, 2),
            active: true,
          },
        ];
        setValue('responseValues', JSON.stringify(resultBody, null, 2));
        window.dispatchEvent(new Event('storage'));
      });
  };

  const create = () => {
    console.log('create!');
    let url = '/create';
    axios
      .post(url, JSON.parse(clean(code)))
      .then((res) => console.log(res.data));
  };

  const removeComments = () => {
    console.log('remove comments');
    const obj = JSON.parse(
      code.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) =>
        g ? '' : m
      )
    );
    console.log(obj);
  };

  const formatCode = () => {
    console.log('format code...');
    console.log(monacoRef);
    monacoRef.current.hb.get('editor.action.formatDocument').b();
  };

  const saveTextAsFile = (text) => {
    const fileName = `${
      JSON.parse(getValue(storageKey))[tabIndex].name
    }.jsonld`;
    const blob = new Blob([text]);
    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.innerHTML = 'Download File';
    if (window.webkitURL) {
      // No need to add the download element to the DOM in Webkit.
      downloadLink.href = window.webkitURL.createObjectURL(blob);
    } else {
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.onclick = (event) => {
        if (event.target) {
          document.body.removeChild(event.target);
        }
      };
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
    }

    downloadLink.click();

    if (window.webkitURL) {
      window.webkitURL.revokeObjectURL(downloadLink.href);
    } else {
      window.URL.revokeObjectURL(downloadLink.href);
    }
  };

  if (!readOnly) {
    return (
      <Container
        className={classes.editorToolbar}
        lay={{ x: 'start', y: 'center', p: '0' }}
      >
        <LedgerSelect ledger={ledger} setLedger={setLedger} />

        <EditorToolbarItem title="New" onClick={newTab}>
          <New sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Open" onClick={() => todo('open')}>
          <Open sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Save" onClick={removeComments}>
          <Save sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem
          title="Download"
          onClick={() => saveTextAsFile(code)}
          //   download={{ tabName: 'tabName', contents: code }}
        >
          <Download sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Autoformat" onClick={formatCode}>
          <Prettify sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <CopyToClipboard text={code} onCopy={() => notify()}>
          <EditorToolbarItem title="Copy">
            <Copy sx={{ fontSize: '20px' }} />
          </EditorToolbarItem>
        </CopyToClipboard>

        <EditorToolbarItem title="Create Ledger" onClick={create}>
          <Create sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Transact" onClick={transact}>
          <Transact sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>

        <EditorToolbarItem title="Query" onClick={query}>
          <Query sx={{ fontSize: '20px' }} />
        </EditorToolbarItem>
        <ToastContainer />
      </Container>
    );
  }
  return (
    <Container
      className={classes.editorToolbar}
      lay={{ x: 'start', y: 'center', p: '0' }}
    >
      <EditorToolbarItem title="Autoformat" onClick={formatCode}>
        <Prettify sx={{ fontSize: '20px' }} />
      </EditorToolbarItem>

      <EditorToolbarItem title="Download" onClick={() => todo('download')}>
        <Download sx={{ fontSize: '20px' }} />
      </EditorToolbarItem>

      <EditorToolbarItem title="Copy" onClick={() => todo('copy')}>
        <Copy sx={{ fontSize: '20px' }} />
      </EditorToolbarItem>
    </Container>
  );
};

export default EditorToolbar;
