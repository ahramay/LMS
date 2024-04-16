import { useState } from "react";
import  { AccordionItem } from "./AccordionDataInterface";
import AccordionItemComponent from "./AccordionItemComponent"
import React from "react";
interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-auto max-w-2xl  px-6  lg:max-w-7xl">
      {items.map((item) => (
        <AccordionItemComponent
          key={item.key}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === item.key}
          onClick={() => handleItemClick(item.key)}
        />
      ))}
    </div>
  );
};




export default Accordion;
