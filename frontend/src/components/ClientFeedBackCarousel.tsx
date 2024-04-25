import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ClientFeedbackCard from "./ClientFeedbackCard";

interface FeedbackData {
  avatarSrc: string;
  name: string;
  position: string;
  feedback: string;
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right:"0px",zIndex:"999",scale:"1.5"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,left:"0px",zIndex:"999",scale:"1.5"}}
      onClick={onClick}
    />
  );
}
const ClientFeedBackCarousel: React.FC = () => {
  // const [feedbackData, setFeedbackData] = useState<FeedbackData[]>([]);
  const feedbackData = [
    {
      avatarSrc: 'https://via.placeholder.com/150',
      name: 'Lorem ipsum',
      position: 'Lorem ipsum dolo',
      feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias eveniet amet sed doloremque magni! Vel, aut omnis. Rerum, quos.",
    },
    {
      avatarSrc: 'https://via.placeholder.com/150',
      name: 'Lorem ipsum',
      position: 'Lorem ipsum dolo',
      feedback: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
      avatarSrc: 'https://via.placeholder.com/150',
      name: 'Lorem ipsum',
      position: 'Lorem ipsum dolo',
      feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias eveniet amet sed doloremque magni! Vel, aut omnis. Rerum, quos.",
    },
    {
      avatarSrc: 'https://via.placeholder.com/150',
      name: 'Lorem ipsum',
      position: 'Lorem ipsum dolo',
      feedback: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
      avatarSrc: 'https://via.placeholder.com/150',
      name: 'Lorem ipsum',
      position: 'Lorem ipsum dolo',
      feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias eveniet amet sed doloremque magni! Vel, aut omnis. Rerum, quos.",
    },
    {
      avatarSrc: 'https://via.placeholder.com/150',
      name: 'Lorem ipsum',
      position: 'Lorem ipsum dolo',
      feedback: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    }
  ];

  // useEffect(() => {
  //   fetch('')
  //     .then(response => response.json())
  //     .then(data => setFeedbackData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 7000,
          arrows: false,
          dots:true
        }
      }
    ]
  };

  return (
    <div className="slider-container bg-[#00303c] px-4 py-20">
      <Slider {...settings}>
        {feedbackData.map((feedback, index) => (
          <div key={index}>
            <ClientFeedbackCard
              avatarSrc={feedback.avatarSrc}
              name={feedback.name}
              position={feedback.position}
              feedback={feedback.feedback}
              homePage={true}
            /> 
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientFeedBackCarousel;
