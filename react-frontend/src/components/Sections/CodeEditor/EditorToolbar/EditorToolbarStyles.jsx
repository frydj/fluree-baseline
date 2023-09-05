import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme, { width }) => {
  const drWidth = theme.constants.drawerWidth;

  return {
    editorToolbar: {
      width: width,
      backgroundColor: 'rgba(19, 32, 39, 1)',
      padding: '2px 4px 5px 4px',
      position: 'relative',
      borderRadius: '5px 5px 0 0',
      '& .MuiIconButton-root': {
        transition: theme.palette.main.transition,
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.05)',
        },
      },

      '&:after': {
        content: '""',
        display: 'block',
        backgroundColor: 'rgba(26, 43, 52, 1)',
        height: '3px',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        borderTop: `2px solid ${theme.palette.main.borderColor}`,
      },
    },
  };
});
