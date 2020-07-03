import React, { useMemo } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  createStyles,
  Theme,
  CssBaseline,
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  ListItemIcon,
  ListItem,
  ListItemText,
  List
} from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

export const DrawerDefault = (props: {
  container: JSX.Element;
  content?: { toolbarTitle?: string; items?: { key: string; icon: JSX.Element }[][] };
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const content = props.content ? props.content : { toolbarTitle: '', items: [] };
  const toolbarTitle = content.toolbarTitle ? content.toolbarTitle : '';
  const items = content.items && content.items.length ? content.items : [];

  const list = useMemo(
    () =>
      items.length
        ? items.map((item: { key: string; icon: JSX.Element }[], itemIndex: number) => {
            return (
              <div key={itemIndex}>
                <List>
                  {item.map(({ key, icon }, valueIndex: number) => {
                    return (
                      <ListItem button key={`${valueIndex}-${itemIndex}`}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={key} />
                      </ListItem>
                    );
                  })}
                </List>
                <Divider />
              </div>
            );
          })
        : null,
    [items]
  );

  const title = useMemo(
    () => (
      <Typography variant="h6" noWrap>
        {toolbarTitle}
      </Typography>
    ),
    [toolbarTitle]
  );

  const toolbar = useMemo(
    () => (
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <Menu />
        </IconButton>
        {title}
      </Toolbar>
    ),
    [title, classes, open]
  );

  const appbar = useMemo(
    () => (
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          {toolbar}
        </AppBar>
      </React.Fragment>
    ),
    [classes, open, toolbar]
  );

  const collapseButton = useMemo(
    () => (
      <React.Fragment>
        <Typography component="h3" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Menu
        </Typography>
        <IconButton onClick={() => setOpen(false)}>{theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}</IconButton>
      </React.Fragment>
    ),
    [theme.direction]
  );

  const drawer = useMemo(
    () => (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>{collapseButton}</div>
        <Divider />
        {list}
      </Drawer>
    ),
    [open, collapseButton, classes, list]
  );

  return (
    <div className={classes.root}>
      {appbar}
      {drawer}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.container}
      </main>
    </div>
  );
};
