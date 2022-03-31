import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Navbar = props => {

    useEffect(() => {console.log('home component rendered!')});
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className='nav-link' to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav">
                        <Link className='nav-link' to="/shop">Shop</Link>

                    </div><p className='float-right'>{props.students[0]}</p>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;