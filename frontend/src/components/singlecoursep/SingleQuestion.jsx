import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="border border-gray-200 rounded-lg bg-white">
        <article className="cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}>
         <div className="flex  bg-gray-100 items-center justify-between p-4 lg:p-6 ">
          <h2
           className=""
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li className="ease-in transition"onClick={() => setShowAnswer(true)}>
                Lesson O1
                <button className="ml-5">
                  <BsPlusLg />
                </button>
              </li>
            )}
            {showAnswer && (
              <li onClick={() => setShowAnswer(false)}>
                   Lesson O1
                <button className="ml-5">
                  <BiMinus />
                </button>
              </li>
            )}
          </ul>
          </div>
        </article>

        <article
          className={`${showAnswer && "border-t border-gray-200  p-4 lg:p-6"}`}
        >
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </>
  );
}