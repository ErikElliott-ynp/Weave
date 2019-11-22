import React from 'react';
import GridLayout from 'react-grid-layout';
import Paper from '@material-ui/core/Paper';
import { defaultCipherList } from 'constants';
import YoutubeList from './youtube/youtube_container';
import NewsList from "./news/news_articles_list_container"

class MainGrid extends React.Component {
    render() {

        var layout = [
          { i: "a", x: 3, y: 0, w: 6, h: 2 },
          { i: "b", x: 0, y: 0, w: 3, h: 8, minW: 2, maxW: 6 },
          { i: "c", x: 4, y: 0, w: 5, h: 5 },
          { i: "d", x: 3, y: 0, w: 1, h: 9 },
          { i: "e", x: 10, y: 0, w: 3, h: 9 },
        ];
        return (
          <GridLayout
            className=""
            layout={layout}
            cols={12}
            width={1750}
            rowHeight={30}
          >
            <div className='YouTube-box' key="a">
              <Paper className="">
                <YoutubeList />
              </Paper>
            </div>

            <div className='Imgr-box' key="b">
              <Paper className="">
                <NewsList />
              </Paper>
            </div>

            <div className='Spotify-box' key="c">
              <Paper className=""></Paper>
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