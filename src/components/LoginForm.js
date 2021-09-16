import React from 'react';
import Username from './Username';
import Password from './Password';

export default class LogInForm extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="card w-25 position-absolute top-50 start-50 translate-middle">
                <div className="card-header bg-success text-white border border-5 border-dark">
                    <h3>Log In</h3>
                </div>
                <div className="card-body border border-3 border-success">
                    <Username />
                    <Password />
                </div>
            </div>
            </div>
        );
    }
}

