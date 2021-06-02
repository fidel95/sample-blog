import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The sample blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add">New Post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;