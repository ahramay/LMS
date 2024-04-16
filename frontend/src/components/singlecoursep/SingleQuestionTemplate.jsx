
import { useParams } from "react-router-dom";
import { questions } from "../../constant/questions";
import SingleQuestion from "./SingleQuestion";
import React, { useState } from "react";

function SingleQuestionTemplate() {
   const query=useParams();

   
  const [cards] = useState(questions);


   
  return (
    <>
      
     
        <div className="px-5 pb-5 lg:px-20 lg:pb-20">
        <h2 className="text-4xl font-bold text-dark-blue mb-3 p-2">
        Course Curriculum
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </div>
      </div>

    </>
  );
}

export default SingleQuestionTemplate;