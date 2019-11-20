import React from 'react';
import MyfirstGrid from '../test_grid';
// import TestGridTwo from '../test_grid2';

class Dashboard extends React.Component {
    render() {
        debugger;
        return (
            <div className='dashboard'>
                <div className='sidebar'>

                </div>
                <div className='main'>
                    <input className='searchbar' type="text" />
                    <div className='playground'>
                        <MyfirstGrid />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;