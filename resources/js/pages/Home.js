import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <Link to="/example">Exampleに遷移</Link>
        </div>
    );
}

export default Home;