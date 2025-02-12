import React from 'react';
import Header from './Header';
import BestFoods from './BestFoods';
import ContactUs from '../ExtraSec/ContactUs';
import ReviewPage from './ReviewPage';
import SalesPromotion from './SalesPromotion';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BestFoods></BestFoods>
            <SalesPromotion></SalesPromotion>
            <ReviewPage></ReviewPage>
        </div>
    );
};

export default Home;