import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root"
import configureStore from './/store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from "./util/session_api_util";
import { logout, signup, login } from "./actions/session_actions";
import './styles/app.scss';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import axios from 'axios'
import { fetchTopPosts } from './actions/imgur_actions'
import { fetchComments } from './actions/comment_actions'

import { models } from 'mongoose';
import { fetchYoutubeSearch } from "./util/youtube_api_util";
 


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

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.fetchComments = fetchComments;
    // window.fetchTopPosts = fetchTopPosts;
    window.fetchYoutubeSearch = fetchYoutubeSearch;
    

    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);

})

let mods = Array.from(document.getElementsByClassName('Muipopover-paper'));
mods.forEach( mod => {
    mod.classList.add('menu-options');
})

document.title = 'Weave';