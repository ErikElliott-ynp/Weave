import React from 'react';
import MyfirstGrid from '../test_grid';

class Dashboard extends React.Component {
    render() {
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