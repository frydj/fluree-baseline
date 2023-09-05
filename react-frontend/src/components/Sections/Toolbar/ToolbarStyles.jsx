import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme, { open }) => {
  const drWidth = theme.constants.drawerWidth;

  return {
    toolbar: {
      backgroundColor: 'rgba(255,255,255,0.18)',
      backdropFilter: 'blur(10px)',
      position: 'fixed',
      top: '0',
      left: open ? drWidth : 0,
      width: open ? `calc(100vw - ${drWidth + 'px'})` : '100vw',
      fontSize: '12px',
      padding: '5px 0 3px',
    },
    toolbarItem: {
      fontWeight: '400',
      marginLeft: '17px',
      cursor: 'default',
      '&:first-of-type': {
        fontWeight: 600,
      },
    },
  };
});
