import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    location: "New York",
    message: "Donating books has helped many students. Glad to be part of it!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    location: "London",
    message: "Thanks to the donors, I got a book I needed for my studies.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Lee",
    location: "Sydney",
    message: "This initiative is truly making a difference!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Donors & Beneficiaries Say
      </h2>
      <Slider {...settings} className="rounded-lg shadow-lg">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-700 italic">"{testimonial.message}"</p>
            <h3 className="font-semibold mt-3">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;