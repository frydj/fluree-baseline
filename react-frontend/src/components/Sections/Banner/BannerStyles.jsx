import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  banner: {
    padding: '4px 10px',
    backgroundColor: theme.palette.meow.mainbg,
    transition: theme.palette.main.transition,
    color: 'rgba(230,230,230,1)',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    flex: '1',
    width: 'calc(100%)',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
  },
}));
