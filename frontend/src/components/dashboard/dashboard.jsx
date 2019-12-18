import React from 'react';
import YoutubeContainer from "../youtube/youtube_container";
import NewsArticlesListContainer from "../news/news_articles_list_container";
import MainGrid from '../main_grid';
import DashSearch from './search_bar';
import PermDrawerContainer from './perm_drawer_container';
import MenuButton from './menu_button';
import { Redirect } from 'react-router-dom';
import LoadingIcon from "../loading";


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    redirect() {
        if (this.props.signedIn === false ) {
          return <Redirect to="/" />
        }
    }

    render() {
        let loading = this.props.loading ? <LoadingIcon /> : null;

        return (
            <div>
                {this.redirect()}
                {loading}

                <div>
                    <PermDrawerContainer className="" />
                </div>
            <div>
                <PermDrawerContainer />
            </div>


                <div className="playground">
                    <MainGrid loading={this.props.loading}/>
                </div>
            </div>
        );
    }
}

export default Dashboard;