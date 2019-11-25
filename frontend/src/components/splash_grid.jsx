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
                rowHeight={100}
                width={2000}
            >
                <div key="a">
                    <Paper className="">Alex Nguyen
                    {/* <img src="Alex_Nguyen.png" alt=""/> */}
                    </Paper>
                </div>

                <div key="b">
                    <Paper className="">Erik Elliott</Paper>
                </div>

                <div key="c">
                    <Paper className="">Jeremy Rosenberg</Paper>
                </div>

                <div key="d">
                    <Paper className="">Zachary Johnson</Paper>
                </div>

                {/* <div key="e">
                    <Paper className=""></Paper>
                </div> */}

            </GridLayout>
        );
    }
}

export default SplashGrid;