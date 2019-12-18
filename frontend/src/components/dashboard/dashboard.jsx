import React from 'react';
import YoutubeContainer from "../youtube/youtube_container";
import NewsArticlesListContainer from "../news/news_articles_list_container";
import MainGrid from '../main_grid';
import DashSearch from './search_bar';
import PermDrawerContainer from './perm_drawer_container';
import MenuButton from './menu_button';
import { Redirect } from 'react-router-dom';
import LoadingIcon from "../loading"

class Dashboard extends React.Component {

    redirect() {
        if (this.props.signedIn === false ) {
          return <Redirect to="/" />
        }
    }

    render() {
        if (loading) return <LoadingIcon />
        return (
            <div>
                {this.redirect()}
                <div>
                    <PermDrawerContainer className="" />
                </div>
            <div>
                <PermDrawerContainer />
            </div>


                <div className="playground">
                    <MainGrid />
                </div>
            </div>
        );
    }
}

export default Dashboard;