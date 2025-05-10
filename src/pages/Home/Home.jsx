import React from 'react';
import Header from './Header';
import BestFoods from './BestFoods';
import ContactUs from '../ExtraSec/ContactUs';
import ReviewPage from './ReviewPage';
import SalesPromotion from './SalesPromotion';
import Newsletter from './Newsletter';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BestFoods></BestFoods>
            <SalesPromotion></SalesPromotion>
            <Faq></Faq>
            <ReviewPage></ReviewPage>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;