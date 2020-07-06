import React from "react";

const Size = ({ size }) => {
  return (
    <h4 className="text-blue my-3">
      <strong>
        sizes:{" "}
        {typeof size === "string" ? (
          size.split(",").map((el, i) => (
            <span
              className="border border-dark mx-1 py-1 px-2 text-center"
              key={i}
            >
              {el}
            </span>
          ))
        ) : (
          <span>{size}</span>
        )}
      </strong>
    </h4>
  );
};

export default Size;
