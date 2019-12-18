import React from 'react';
import GridLayout from 'react-grid-layout';
import YoutubeList from './youtube/youtube_container';
import NewsList from './news/news_articles_list_container';
import ImgurList from './imgur/imgur_container';

class MainGrid extends React.Component{
  constructor(props){
    super(props)
  }
    render() {
        var layout = [
          { i: "a", x: 0, y: 0, w: 4.5, h: 15, minW: 4, maxW: 8, maxH: 22, minH: 15 },
          { i: "b", x: 4.2, y: 0, w: 4, h: 13, minW: 2.5, maxW: 8, minH: 7, maxH: 50},
          { i: "c", x: 2, y: -.5, w: 5.5, h: 18, minW: 4.5, MaxW: 4.5, minH: 8, maxH: 50 },
        ];
        return (
          <GridLayout
            className=""
            layout={layout}
            cols={10}  
            width={1750}
            rowHeight={7}
            draggableCancel="input"
          >
            
            <div className='YouTube-box hidden' id="youtube-box" key="a">
                <YoutubeList />
            </div>

            <div className='GoogleNews-box hidden' id="news-box" key="b">
                <NewsList />
            </div>

            <div className='Imgur-box hidden' id="imgur-box" key="c">
                <ImgurList />
            </div>


          </GridLayout>
        );
    }
}

export default MainGrid;