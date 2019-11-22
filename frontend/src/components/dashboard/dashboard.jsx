import React from 'react';
import YoutubeContainer from "../youtube/youtube_container";
import NewsArticlesListContainer from "../news/news_articles_list_container";
import MainGrid from '../main_grid';
import DashSearch from './search_bar';
import PermDrawer from './perm_drawer';
import MenuButton from './menu_button';

class Dashboard extends React.Component {
    render() {
        return (
            
            <div>
                <div>
                    <PermDrawer className="" />
                </div>
            <div>
                <PermDrawer />
            </div>

            <div>
                <DashSearch />
            </div>

                <div className="playground">
                    <MainGrid />
                </div>
            </div>
        );
    }
}

export default Dashboard;