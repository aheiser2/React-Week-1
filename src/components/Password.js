import React from 'react';

export default class Password extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <label for="passwordInput" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
            </div>
        );
    }
}