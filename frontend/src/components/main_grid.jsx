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
          { i: "a", x: 2, y: 0, w: 4.5, h: 10, minW: 4, maxW: 5.5, maxH: 22, minH: 3.5 },
          { i: "b", x: 2, y: 0, w: 4, h: 8, minW: 2.5, maxW: 8, minH: 6, maxH: 50},
          { i: "c", x: 2, y: 0, w: 5.5, h: 10, minW: 4.5, MaxW: 6.5, minH: 6, maxH: 50 },
          { i: "e", x: 2, y: 0, w: 5, h: 8, minW: 1.5, MaxW: 8 },
        ];
        return (
          <GridLayout
            className=""
            layout={layout}
            cols={12}
            width={1750}
            rowHeight={30}
            draggableCancel="input"
          >
            <div className='YouTube-box' key="a">
              <Paper className="">
                <YoutubeList />
              </Paper>
            </div>

            <div className='GoogleNews-box' key="b">
              <Paper className="">
                <NewsList />
              </Paper>
            </div>

            <div className='Imgur-box' key="c">
              <Paper className="">
                <ImgurList />
              </Paper>
            </div>

            <div className='Placeholder-box' key="d">
              <Paper className="">
                
              </Paper>
            </div>

            <div className='Placeholder-box' key="e">
              <Paper className=""></Paper>
            </div>

          </GridLayout>
        );
    }
}

export default MainGrid;