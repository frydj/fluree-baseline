import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme, { width }) => {
  const drWidth = theme.constants.drawerWidth;

  return {
    'MuiFormControl-root *': {
      color: 'snow',
    },

    'MuiBox-root': {
      height: '30px',
      display: 'flex',
      alignItems: 'center',
    },

    'MuiFormControl-root': {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
    },

    'MuiInputBase-root': {
      fontSize: '14px',
      height: '100%',
    },

    'MuiInputBase-input': {
      padding: ' 0 8px',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },

    'MuiInputBase-root::before': {
      borderBottom: 'none !important',
    },

    'monaco-editor, .monaco-editor *': {
      transition: '0s !important',
    },

    'MuiPopover-paper': {
      backgroundColor: 'rgba(25,43,52,1)',
      color: 'snow',
    },

    'MuiMenuItem-root': {
      fontSize: '14px',
    },
  };
});
