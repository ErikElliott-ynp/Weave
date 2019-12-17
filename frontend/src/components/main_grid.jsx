import React from 'react';
import GridLayout from 'react-grid-layout';
import Paper from '@material-ui/core/Paper';
import { defaultCipherList } from 'constants';
import YoutubeList from './youtube/youtube_container';
import NewsList from './news/news_articles_list_container';
import ImgurList from './imgur/imgur_container';

class MainGrid extends React.Component {
    render() {

        var layout = [
          { i: "a", x: 0, y: 0, w: 3, h: 5 },
          { i: "b", x: 10, y: 0, w: 3, h: 5 },
          { i: "c", x: 0, y: 10, w: 3, h: 5 },
          { i: "d", x: 10, y: 10, w: 3, h: 5 },
          { i: "e", x: 10, y: 20, w: 3, h: 5 },
        ];
        return (
          <GridLayout
            className=""
            layout={layout}
            cols={500}
            width={1000}
            rowHeight={10}
            draggableCancel="input"
          >
            <div className='YouTube-box' key="a">
                <YoutubeList />
            </div>

            <div className='GoogleNews-box' key="b">
                <NewsList />
            </div>

            <div className='Imgur-box' key="c">
                <ImgurList />
            </div>

            <div className='Placeholder-box' key="d">
            </div>

            <div className='Placeholder-box' key="e">
            </div>

          </GridLayout>
        );
    }
}

export default MainGrid;