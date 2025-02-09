// src/components/Testimonials.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      text: 'This is a great initiative. It helped me get books for my students!',
      image: '/path/to/jane-image.jpg',
    },
    {
      name: 'John Smith',
      text: 'I was able to donate books to schools that needed them. Fantastic!',
      image: '/path/to/john-image.jpg',
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials">
      <h2>What Our Beneficiaries Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p>"{testimonial.text}"</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
