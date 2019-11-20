import React from 'react';
import GridLayout from 'react-grid-layout';
import Paper from '@material-ui/core/Paper';


class MyFirstGrid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2 },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 }
        ];
        return (
            <GridLayout className="layout" layout={layout} cols={12} width={950} rowHeight={30} >

            <div  key="a">
                <Paper className="finstaTheSpinsta">

                </Paper>
            </div>

            <div  key="b">
                    <Paper className="yeetThatTweet">

                </Paper>
            </div>

            <div  key="c">
                    <Paper className="rodeIt">

                </Paper>
            </div>
            </GridLayout>
        )
    }
}

export default MyFirstGrid;