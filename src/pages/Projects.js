import React from 'react';
import ProjectGallery from '../components/ProjectGallery';
import Layout from '../components/Layout/Layout';
/* import Link from './Link.js'; */
import '../styles/App.css';

function Home() {
    return (
        <Layout>
            <ProjectGallery />
        </Layout>
    );
}

export default Home;