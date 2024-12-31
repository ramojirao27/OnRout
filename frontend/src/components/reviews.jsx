// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import ReviewCard from './reviewCard';

// const TextsCarousel = () => {
//   const reviews = [
//     {
//       id: 1,
//       name: 'John Doe',
//       rating: 4,
//       image: 'https://photovideolounge.com/wp-content/uploads/2019/11/formal-blonde-passport-photo.jpg',
//       text: 'it’s a game-changer! As someone who loves celebrating festivals but struggles to find everything I need in one place, this platform has made my life so much easier.',
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       rating: 4,
//       image: 'https://thumbs.dreamstime.com/b/passport-20639414.jpg',
//       text: 'it’s a game-changer! As someone who loves celebrating festivals but struggles to find everything I need in one place, this platform has made my life so much easier.',
//     },
//     {
//       id: 3,
//       name: 'Alice Johnson',
//       rating: 4,
//       image: 'https://thumbs.dreamstime.com/b/young-businessman-smiling-friendly-man-wearing-suit-tie-36412869.jpg',
//       text: 'it’s a game-changer! As someone who loves celebrating festivals but struggles to find everything I need in one place, this platform has made my life so much easier.',
//     },
//     {
//       id: 4,
//       name: 'Mark Taylor',
//       rating: 4,
//       image: 'https://th.bing.com/th/id/OIP.fm6spaP5n6LaiTzrhsny9AHaJR?w=151&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
//       text: 'it’s a game-changer! As someone who loves celebrating festivals but struggles to find everything I need in one place, this platform has made my life so much easier.',
//     },
//   ];

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 1024 },
//       items: 3,
//     },
//     desktop: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 768, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   return (
//     <div className="py-10 px-10 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
//       <Carousel
//         responsive={responsive}
//         infinite
//         autoPlay
//         autoPlaySpeed={3000}
//         containerClass="gap-x-6" // Adds spacing between cards
//       >
//         {reviews.map((review) => (
//           <div key={review.id} className="px-3"> {/* Adds padding around individual cards */}
//             <ReviewCard review={review} />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default TextsCarousel;
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './reviewCard';

const TextsCarousel = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 4,
      image: 'https://photovideolounge.com/wp-content/uploads/2019/11/formal-blonde-passport-photo.jpg',
      text: 'This platform has made celebrating festivals so much easier!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 5,
      image: 'https://thumbs.dreamstime.com/b/passport-20639414.jpg',
      text: 'An incredible experience! Everything I needed in one place.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      rating: 4,
      image: 'https://thumbs.dreamstime.com/b/young-businessman-smiling-friendly-man-wearing-suit-tie-36412869.jpg',
      text: 'Super convenient and easy to use. Highly recommended!',
    },
    {
      id: 4,
      name: 'Mark Taylor',
      rating: 5,
      image: 'https://th.bing.com/th/id/OIP.fm6spaP5n6LaiTzrhsny9AHaJR?w=151&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      text: 'Great quality and fast delivery. Loved the service!',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">What Our Clients Say</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        containerClass="gap-x-4"
        itemClass="p-4"
        arrows={false} // Hide arrows for mobile view
        showDots={false} // Show dots for navigation
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Carousel>
    </div>
  );
};

export default TextsCarousel;
