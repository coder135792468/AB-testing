import React from "react";

const CharTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-secondary p-3 border-2 rounded-md">
        <p className="color-[white]">
          <strong>ID : </strong>
          {label}
          <br />
          <strong>No of View: </strong>
          {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};

export default CharTooltip;
