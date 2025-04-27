import React from "react";
import quality from "./Quality";

const QualityComponent = () => {
  const getColor = (title) => {
    switch (title) {
      case "Excellent":
        return "green";
      case "Good":
        return "green";
      case "Average":
        return "black";
      case "Poor":
        return "red";
      case "Severe":
        return "#8B0000"; // Deep red
      default:
        return "black";
    }
  };

  return (
    <div>
      {quality.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            color: getColor(item.title),
          }}
        >
          <img
            src={item.imageLink}
            alt={item.title}
            style={{ width: "50px", height: "50px" }}
          />
          <h3>{item.title}</h3>
          <p>{item.class}</p>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default QualityComponent;
