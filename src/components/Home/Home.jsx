import React from "react";
import {Link} from "react-router-dom";

let Home = () => {
    return (
        <div>
          <h3>Home Page</h3>
            <Link to="/newConfig">Create New Config</Link>
        </div>
    );
}

export default Home;