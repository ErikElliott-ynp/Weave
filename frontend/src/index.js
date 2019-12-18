import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root"
import configureStore from './/store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";
import './styles/app.scss';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';


document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session : { isAuthenticated: true, user: decodedUser } };
    
        store = configureStore(preloadedState);

        const currentTime = Date.now / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout())
            window.location.href = '/login';
        }
     } else {
        store = configureStore({});
    }


    if (process.env.NODE_ENV !== "production") {
        // must use 'require' (import only allowed at top of file)
        window.getState = store.getState;
    }

    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);

})

let mods = Array.from(document.getElementsByClassName('Muipopover-paper'));
mods.forEach( mod => {
    mod.classList.add('menu-options');
})

document.title = 'Weave';