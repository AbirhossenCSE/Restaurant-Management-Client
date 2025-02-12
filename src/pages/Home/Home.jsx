import React from 'react';
import Header from './Header';
import BestFoods from './BestFoods';
import ContactUs from '../ExtraSec/ContactUs';
import ReviewPage from './ReviewPage';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BestFoods></BestFoods>
            {/* <ContactUs></ContactUs> */}
            <ReviewPage></ReviewPage>
        </div>
    );
};

export default Home;