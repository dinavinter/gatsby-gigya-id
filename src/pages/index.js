import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';
import {Main} from "../components/Main";
import {GigyaProvider} from "../gigya";
import {Bar} from "../components/Navbar";

var settings = {
    images: [
        {url: require('../assets/images/bg01.jpg'), position: 'center'},
        {url: require('../assets/images/bg02.jpg'), position: 'center'},
        {url: require('../assets/images/bg03.jpg'), position: 'center'},
    ],
    // Delay.
    delay: 6000,
};

const IndexPage = () => (
    <GigyaProvider apiKey={"3_AO0Wfh-Q3xoWbnNsdzLG-aJP2Z3xY9OZNd-l1lfokBcQI9UBV3vCiTkB9Crh9W_v"}
                   domain={"gigya.com"}> 
        <head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
        </head>
        <Layout>
            <Bar />
            <Header/>
            <Main/>
            <Footer/>
            <SlideShow settings={settings}/>
        </Layout>
    </GigyaProvider>
);

export default IndexPage;
