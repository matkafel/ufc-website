import React from 'react'
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="Nav">
            <Link to="/" className='nav-link logo' >ufc</Link>

            <ul className="list">
                <Link className='nav-link' to="/rankings">Rankings</Link>
                <Link className='nav-link' to="/history">History</Link>
                <Link className='nav-link' to="/hall-of-fame">Hall Of Fame</Link>
            </ul>
        </div>

    )
}

export default Navigation;