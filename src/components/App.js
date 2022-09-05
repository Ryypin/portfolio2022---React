import Background from './Background.js';
import Nav from './Nav.js';
import Banner from './Banner.js';
import SocialsScroll from './SocialsScroll.js';
/* import Link from './Link.js'; */
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <Nav />
      <Banner />
      <SocialsScroll />
      {/* <Link linkText="Website" linkUrl="http://steven-harris.be/" /> */} 
    </div>
  );
}

export default App;
