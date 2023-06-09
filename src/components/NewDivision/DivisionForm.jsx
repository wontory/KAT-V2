import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import Swal from "sweetalert2";

import DayTimeForm from "./DayTimeForm";
import ProfessorForm from "./ProfessorForm";

const DivisionForm = (props) => {
  const [enteredDay, setEnteredDay] = useState("요일");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredProfessor, setEnteredProfessor] = useState("");

  const changeDayHandler = (event) => {
    setEnteredDay(event.target.value);
  };

  const changeTimeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const changeProfessorHandler = (event) => {
    setEnteredProfessor(event.target.value);
  };

  const submitHandler = () => {
    if (
      enteredDay === "요일" ||
      enteredTime === "" ||
      enteredProfessor === ""
    ) {
      Swal.fire({
        title: "오류",
        text: "빈 칸을 모두 입력해주세요.",
        icon: "error",
        confirmButtonText: "확인",
      });
      return;
    }

    if (enteredTime.length !== props.credit) {
      Swal.fire({
        title: "오류",
        text: "학점과 교시를 다시 한 번 확인해주세요.",
        icon: "error",
        confirmButtonText: "확인",
      });
      return;
    }

    const divisionData = {
      day: enteredDay,
      time: enteredTime,
      professor: enteredProfessor,
    };

    props.onSaveDivisionData(divisionData);
    setEnteredDay("");
    setEnteredTime("");
    setEnteredProfessor("");
  };

  return (
    <div className="card-body p-0">
      <div className="divider" />
      <h2 className="card-title justify-between">
        분반 {props.id}
        <button type="button">
          <BsX onClick={props.onCancel} />
        </button>
      </h2>
      <DayTimeForm
        enteredDay={enteredDay}
        enteredTime={enteredTime}
        onChangeDay={changeDayHandler}
        onChangeTime={changeTimeHandler}
      />
      <ProfessorForm
        enteredProfessor={enteredProfessor}
        onChangeProfessor={changeProfessorHandler}
      />
      <div className="card-actions mt-4 justify-between">
        <button
          type="button"
          className="btn btn-success w-full"
          onClick={submitHandler}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default DivisionForm;
