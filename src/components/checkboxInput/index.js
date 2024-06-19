import React, { Suspense } from "react";

const CheckboxInput = ({
  data,
  selectedElement,
  handleCheckboxChange,
}) => {
  return (
    <Suspense fallback={<>Loading</>}>
      {data && data.map((element) => (
				<label key={element.id}>
          <input
            type="checkbox"
            checked={selectedElement.includes(element.id)}
            name={element.id}
            onChange={handleCheckboxChange}
          />
          {element.id}
        </label>)
      )}
    </Suspense>
  );
};

export default CheckboxInput;
