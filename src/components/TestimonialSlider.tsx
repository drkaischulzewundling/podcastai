import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'Content Creator',
    content: 'PodcastAI has revolutionized the way I create content. It\'s so easy to turn my blog posts into engaging podcasts!',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Manager',
    content: 'The AI-generated voices sound incredibly natural. Our audience loves the variety of voices we can now offer.',
  },
  {
    name: 'Mike Johnson',
    role: 'Educator',
    content: 'As a teacher, PodcastAI helps me create audio versions of my lessons effortlessly. It\'s a game-changer for accessibility.',
  },
];

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg mb-4">"{testimonial.content}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;