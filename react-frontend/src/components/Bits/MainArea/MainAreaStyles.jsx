import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme, { open }) => {
  const bnHeight = theme.constants.bannerHeight;
  const tbHeight = theme.constants.toolbarHeight;
  const drWidth = theme.constants.drawerWidth;
  const verticalDifference = bnHeight + tbHeight;
  return {
    mainArea: {
      backgroundColor: theme.palette.main.background,
      transition: theme.palette.main.transition,
      width: open ? `calc(100vw - ${drWidth + 'px'})` : '100vw',
      height: `calc(100vh - ${verticalDifference + 'px'})`,
      overflow: 'auto',
      marginTop: tbHeight,
    },
  };
});
