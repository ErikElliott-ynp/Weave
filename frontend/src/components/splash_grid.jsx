import React from 'react';
import GridLayout from 'react-grid-layout';
import Paper from '@material-ui/core/Paper';
import { defaultCipherList } from 'constants';

class SplashGrid extends React.Component {
    render() {

        var layout = [
            { i: "a", x: 3, y: 0, w: 3, h: 2 },
            { i: "b", x: 0, y: 0, w: 3, h: 8, minW: 2, maxW: 6 },
            { i: "c", x: 4, y: 0, w: 5, h: 5 },
            { i: "d", x: 3, y: 0, w: 1, h: 9 },
            { i: "e", x: 10, y: 0, w: 3, h: 9 },
        ];
        return (
            <GridLayout
                className="layout"
                autoSize={false}
                verticalCompact={false}
                cols={12}
                rowHeight={350}
                width={1000}
            >
                {/* <h3>Meet the Creators</h3>
                <div className="creators-header">Meet the Creators</div> */}

                <div key="a">
                    <Paper className="alex-picture">Alex Nguyen
                    <img className="photo" src="/Alex_Nguyen1.jpg" alt=""/>
                    </Paper>
                </div>

                <div key="b">
                    <Paper className="erik-picture">Erik Elliott
                    <img className="photo" src="/Erik_Elliot.1.jpg" alt="" />
                    </Paper>
                </div>

                <div key="c">
                    <Paper className="jeremy-picture">Jeremy Rosenberg
                    <img className="photo" src="/Jeremy_Rosenberg.jpg" alt="" />
                    </Paper>
                </div>

                <div key="d">
                    <Paper className="zak-picture">Zachary Johnson
                    <img className="photo" src="/Zak_Johnson.jpg" alt="" />
                    </Paper>
                </div>

                {/* <div key="e">
                    <Paper className=""></Paper>
                </div> */}

            </GridLayout>
        );
    }
}

export default SplashGrid;