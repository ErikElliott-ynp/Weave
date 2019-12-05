import React from 'react';
import GridLayout from 'react-grid-layout';
import Paper from '@material-ui/core/Paper';
import { defaultCipherList } from 'constants';

class SplashGrid extends React.Component {
    render() {

        var layout = [
            { i: "a", x: 0, y: 0, w: 20, h: 10 },
            { i: "b", x: 20, y: 0, w: 20, h: 10 },
            { i: "c", x: 0, y: 10, w: 20, h: 10 },
            { i: "d", x: 20, y: 10, w: 20, h: 10},
            { i: "e", x: 0, y: 20, w: 40, h: 10}
        ];

        return (
            <GridLayout
                className={"layout"}
                layout={layout}
                autoSize={false}
                verticalCompact={false}
                cols={100}
                rowHeight={10}
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

                <div key="e">
                    <Paper className="">
                        <div className="description">Weave</div>
                        <div className="description">All in one dashboard.</div>
                    </Paper>
                </div>

            </GridLayout>
        );
    }
}

export default SplashGrid;