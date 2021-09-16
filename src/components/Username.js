import React from 'react';

export default class Username extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <label for="usernameInput" className="form-label">Username</label>
                <input type="username" className="form-control" id="usernameInput" placeholder="Username"></input>
            </div>
        );
    }
}