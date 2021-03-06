import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuButton from "./menu_button_container";




const drawerWidth = 140;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        width: `calc(50% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}));

export default function PermDrawer(props) {
    const classes = useStyles();
    const logout = props.logout;


    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                <Divider />

                <List>
                    {["YouTube", "News", "Imgur"].map((text, index) => (
                        <MenuButton key={index} >
                            <ListItem button key={text} primary={text} >
                                <ListItemText primary={text} />
                            </ListItem>
                        </MenuButton>
                    ))}
                        <ListItem 
                        onClick={logout}
                        className="logout-button">
                                <ListItemText primary={"Logout"} />
                        </ListItem>
                </List>

                <Divider />
            </Drawer>
        </div>
    );
}
