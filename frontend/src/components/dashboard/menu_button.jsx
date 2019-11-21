import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import * as mediaUtil from '../../util/media_util';

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
    buttonHandler(event);
    setSelectedIndex(index);
    setAnchorEl(null);
  };


  //I plan to separate each social media switch to another file and importing them into this function - Alex
  const buttonHandler = (event) => {
    const target = event.currentTarget;
    //Handles Youtube
    mediaUtil.handleMedia("YouTube", event, props);

    //Handles Imgr
    mediaUtil.handleMedia("Imgr", event, props);

    //Handles Spotify
    mediaUtil.handleMedia("Spotify", event, props);

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