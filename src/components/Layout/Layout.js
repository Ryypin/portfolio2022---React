import Background from '../Background.js';
import Nav from '../Nav.js';
/* import Link from './Link.js'; */
import '../../styles/App.css';

function Layout({children}) {
  return (
    <div className="App">
      <Background />
      <Nav />
      <main>{ children }</main>
    </div>
  );
}

export default Layout;
