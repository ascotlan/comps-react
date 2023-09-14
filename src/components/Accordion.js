import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    // use functional version of state update when the new value depends upon the old value or state updates occurs really quickly

    /*** Simple version ***/
    // expandedIndex === nextIndex
    //   ? setExpandedIndex(-1)
    //   : setExpandedIndex(nextIndex);

    /*** Functional version which gives access to the most current value of the piece of state ***/
    setExpandedIndex((currentExpandedIndex) => {
      return currentExpandedIndex === nextIndex ? -1 : nextIndex;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <article key={item.id}>
        <p
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </p>
        {isExpanded && <p className="border-b p-5">{item.content}</p>}
      </article>
    );
  });

  return (
    <section className="border-x border-t rounded">{renderedItems}</section>
  );
}

export default Accordion;
