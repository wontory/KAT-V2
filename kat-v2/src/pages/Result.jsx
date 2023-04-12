import React from "react";

import TimetableItem from "../components/Timetables/TimetableItem";

const Result = (props) => {
  return (
    <div className="flex flex-wrap justify-center items-start p-8 gap-8 overflow-x-scroll overflow-y-hidden z-10 scrollbar-hide sm:flex-nowrap sm:justify-normal">
      <ul className="flex flex-wrap justify-center items-start gap-8 sm:flex-nowrap sm:justify-normal">
        {props.timetables.map((timetable) => (
          <TimetableItem
            key={timetable.id}
            id={timetable.id}
            item={timetable.lectures}
          />
        ))}
      </ul>
    </div>
  );
};

export default Result;