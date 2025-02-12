import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restaurant-management-server-rho.vercel.app/contact')
      .then(res => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching reviews:", err);
        setLoading(false);
      });
  }, []);

  // Slider settings with center mode enabled
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-gray-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      <Slider {...sliderSettings}>
        {reviews.map(review => (
          <div key={review._id} className="px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center mx-auto">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{review.email}</p>
              <p className="text-gray-800">{review.message}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewPage;
