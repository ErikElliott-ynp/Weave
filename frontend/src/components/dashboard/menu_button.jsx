import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const options = [
  "Main Feed",
  "Off"
];

export default function MenuButton(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleMenuItemClick = (event, index) => {
    youtubeHandler(event);
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const youtubeHandler = (event) => {
    const target = event.currentTarget;
    if ( target.id === "YouTube" && target.innerText === "Main Feed") {
      document.querySelector(".youtube-box").style.visibility = "visible";
      this.props.fetchVideos();
    } else if (target.id === "YouTube" && target.innerText === "Off") {
      document.querySelector(".youtube-box").style.visibility = "hidden";
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const listName = props.children.key;

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="placeholder">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="placeholder"
          onClick={handleClickListItem}
        >
          <ListItemText primary={listName} secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            id={listName}
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}