import React from 'react';
import CommentSection from '../../CommentSection/CommentSection';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Header></Header>
            <Banner></Banner>
            <HomeService></HomeService>
            <CommentSection></CommentSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
