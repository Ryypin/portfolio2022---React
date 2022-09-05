/* import { Link } from "react-router-dom"; */
import '../styles/Nav.css';
import logo from '../assets/logo.svg';
import { Link, useLocation } from "react-router-dom";

function Nav() {

    const location = useLocation();
    console.log('pathname', location.pathname);

    function activeHome() {
        if(location.pathname === '/'){
            return "home";
        }
    }

    function activeProject() {
        if(location.pathname === '/projects'){
            return "project";
        }
    }

    function activeContact() {
        if(location.pathname === '/contact'){
            return "contact";
        }
    }

    return(
        <nav>
            <ul className={"nav__block " + activeProject()}>
                <li className="nav__left">
                    <Link to="/">
                        <img src={logo} className="nav__logo" alt="logo" />
                    </Link>
                </li>
                <li className="nav__right">
                    <ul className="nav__list">
                        <li className="nav__el">
                            <Link className={"nav__link " + activeHome()} to="/">About</Link>
                        </li>
                        <li className="nav__el">
                            <Link className={"nav__link " + activeProject()} to="/projects">Projects</Link>
                        </li>
                        <li className="nav__el">
                            <Link className={"nav__link " + activeContact()} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;