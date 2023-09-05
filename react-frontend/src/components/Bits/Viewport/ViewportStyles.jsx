import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  viewport: {
    minHeight: '100vh',
    minWidth: '100vw',
    maxHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'auto',
    backgroundColor: theme.palette.main.background,
    transition: theme.palette.main.transition,
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
