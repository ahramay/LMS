import React from "react";
import { FaStar } from "react-icons/fa";
import ClientFeedbackCard from "./ClientFeedbackCard";

interface FeedbackItem {
  id: number;
  avatarSrc: string;
  name: string;
  position: string;
  feedback: string; 
}

const ClientFeedback: React.FC = () => {
  // Dummy data for feedback
  const feedbackData: FeedbackItem[] = [
    {
      id: 1,
      avatarSrc: "avatar1.jpg",
      name: "John Doe",
      position: "CEO / Company A",
      feedback: "Great experience with the company. Highly recommended!",
    },
    {
      id: 2,
      avatarSrc: "avatar2.jpg",
      name: "Jane Smith",
      position: "CTO / Company B",
      feedback: "Excellent service and quick response time.",
    },
    {
      id: 3,
      avatarSrc: "avatar3.jpg",
      name: "Michael Johnson",
      position: "COO / Company C",
      feedback: "Very satisfied with the product quality.",
    },
    {
      id: 4,
      avatarSrc: "avatar4.jpg",
      name: "Emily Davis",
      position: "CFO / Company D",
      feedback: "Professional team and smooth process throughout.",
    },
  ];

  return (
    <>
      <div className="flex gap-2 justify-center">
        {[1, 2, 3, 4, 5].map((item) => (
          <FaStar key={item} size={30} color="yellow" />
        ))}
      </div>
      <h2 className="text-center py-2 text-4xl text-black font-bold">
        What our customers are saying
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        {feedbackData.map((item) => (
          <ClientFeedbackCard
            key={item.id}
            avatarSrc={item.avatarSrc}
            name={item.name}
            position={item.position}
            feedback={item.feedback}
          />
        ))}
      </div>
    </>
  );
};

export default ClientFeedback;
