import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Bits/Container/Container';
import EditorMain from '../components/Sections/CodeEditor/EditorMain';
import useGlobal from '../hooks/useGlobal';
import { useTheme } from '@mui/material';

const query = {
  ledger: 'http-api-gateway/test',
  query: {
    where: [['?i', 'id', 'ex:Derek']],
    select: {
      '?i': ['*'],
    },
  },
};

axios.defaults.baseURL = 'http://localhost:58090/fluree/';

document.documentElement.setAttribute('data-color-mode', 'dark');

const Fluree = () => {
  const theme = useTheme();

  const {
    state: { flureeEditorKey, responseEditorKey, open },
  } = useGlobal();

  const drawerWidth = theme.constants.drawerWidth;
  const editorWidth = open
    ? `calc(50vw - 60px - ${drawerWidth / 2}px)`
    : 'calc(50vw - 60px)';

  return (
    <Container lay={{ x: 'start', y: 'start' }} className="editors-container">
      <EditorMain storageKey={flureeEditorKey} width={editorWidth} />
      <EditorMain storageKey={responseEditorKey} width={editorWidth} readOnly />
    </Container>
  );
};

export default Fluree;
