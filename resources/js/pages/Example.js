import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

function Example() {
    return (
        <div className="container">
            <Link to="/">Homeに遷移</Link>
        </div>
    );
}

export default Example;