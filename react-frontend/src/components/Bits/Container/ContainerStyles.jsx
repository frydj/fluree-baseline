import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  container: {
    color: theme.palette.main.text,
    transition: theme.palette.main.transition,
  },
}));
