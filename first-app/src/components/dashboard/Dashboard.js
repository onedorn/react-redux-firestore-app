import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row"></div>
                <div className="col s12 m6">
                <ProjectList />
                </div>
                <div className="col s12 m5 offset-m1"></div>
                <Notifications />
                
            </div>
        )
    }
}

export default Dashboard