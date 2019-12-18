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
          { i: "a", x: 0, y:-1.5, w: 4.5, h: 10, minW: 4, maxW: 8, maxH: 22, minH: 3.5 },
          { i: "b", x: 4.7, y: -2, w: 4, h: 8, minW: 2.5, maxW: 8, minH: 6, maxH: 50},
          { i: "c", x: 2, y: -.5, w: 5.5, h: 10, minW: 4.5, MaxW: 4.5, minH: 6, maxH: 50 },
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