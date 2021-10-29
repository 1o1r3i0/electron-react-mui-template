import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';
import { ListItem, ListItemButton } from '@mui/material';

// ドロワー表示位置
type Anchor = 'left';
const anchorName = 'left';
let appBarName = 'HOME';

function ApplicationBar() {
  // ステート宣言
  const [state, setState] = React.useState({
    left: false,
  });

  // ドロワー処理
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const history = useHistory();

  const PageTransition = (text: string) => {
    appBarName = text.toString();
    switch (text) {
      case 'HOME':
        history.push('/');
        break;
      case '連絡先一覧':
        history.push('/contacts');
        break;
      case '新規作成':
        history.push('/add-new-contact');
        break;
      default:
        history.push('/');
        break;
    }
  };

  // ドロワー内リスト
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['HOME', '連絡先一覧', '新規作成'].map((text) => (
          <ListItemButton key={text} onClick={() => PageTransition(text)}>
            <ListItemIcon>
              {text.match('HOME') && <HomeIcon />}
              {text.match('連絡先一覧') && <ContactPhoneIcon />}
              {text.match('新規作成') && <AddCircleOutlineIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchorName, true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <List>
              <ListItem>
                <ListItemIcon className="application-bar-list-item-icon">
                  {appBarName.match('HOME') && <HomeIcon />}
                  {appBarName.match('連絡先一覧') && <ContactPhoneIcon />}
                  {appBarName.match('新規作成') && <AddCircleOutlineIcon />}
                </ListItemIcon>
                <ListItemText primary={appBarName} />
              </ListItem>
            </List>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={anchorName}
        open={state[anchorName]}
        onClose={toggleDrawer(anchorName, false)}
      >
        {list(anchorName)}
      </Drawer>
    </Box>
  );
}

export default ApplicationBar;
