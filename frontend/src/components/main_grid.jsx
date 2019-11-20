import React from 'react';
import GridLayout from 'react-grid-layout';
import Paper from '@material-ui/core/Paper';
import { defaultCipherList } from 'constants';

class MainGrid extends React.Component {
    render() {
        return (
            <GridLayout className="layout" autoSize={false} verticalCompact={false} cols={12} rowHeight={30} width={1125}>
                <div className='a' key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>WHY WONT</div>
                <div className='a' key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2 }}>THIS WORK</div>
                <div className='a' key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
                <div className='inner-box'>I SWEAR THIS SCROLLS </div>
                </div>
            </GridLayout>
        )
    }
}

export default MainGrid;