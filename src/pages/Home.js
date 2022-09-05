import React from 'react';
import Banner from '../components/Banner.js';
import SocialsScroll from '../components/SocialsScroll.js';
import Layout from '../components/Layout/Layout';
/* import Link from './Link.js'; */
import '../styles/App.css';

function Home() {

    return (
        <Layout>
            <div className="App">
                <Banner />
                <SocialsScroll />
            {/* <Link linkText="Website" linkUrl="http://steven-harris.be/" /> */}
            </div>
        </Layout>
    );
}

export default Home;