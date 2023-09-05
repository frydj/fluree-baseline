import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme, { open }) => ({
  drawer: {
    display: 'block',
    backgroundColor: theme.palette.secondary.background,
    position: 'absolute',
    left: open ? '0' : '-220px',
    height: `calc(100vh - ${theme.constants.bannerHeight + 'px'})`,
    width: `${theme.constants.drawerWidth}px`,
  },
  navItem: {
    display: 'block',
    width: '100%',
    borderBottom: '1px solid snow',
    paddingBottom: '5px',
    marginBottom: '5px',
    '&:first-of-type': {
      marginTop: 20,
    },
    '& a': {
      display: 'block',
      margin: '-3px 0',
      padding: '3px 10px',
      transition: '0.25s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.1)',
      },
    },
  },
}));
