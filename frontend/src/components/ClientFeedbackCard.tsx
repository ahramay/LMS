import React from "react";

interface ClientFeedbackCardProps {
  avatarSrc: string;
  name: string;
  position: string;
  feedback: string;
  homePage?:boolean
}

const ClientFeedbackCard: React.FC<ClientFeedbackCardProps> = ({
  avatarSrc,
  name,
  position,
  feedback,
  homePage
}) => {
  return (
    <div className={`flex flex-col items-center gap-4 rounded-2xl shadow-lg px-8 py-6 md:gap-6 bg-light  mx-2 ${homePage ? 'text-white':'text-black'}`}>
      <div className="text-center lg:text-lg">
       {feedback}
      </div>

      <div className="flex items-center cursor-pointer flex-row gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
          <img src={avatarSrc} alt={name} />
        </div>
        <div className="flex-col">
          <div className="text-center text-sm font-bold sm:text-left md:text-base">
            {name}
          </div>
          <p className="text-center text-sm sm:text-left md:text-sm">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedbackCard;
