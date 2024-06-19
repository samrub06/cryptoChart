import React, { useEffect } from "react";

const RangeInput = ({
  id,
  min,
  max,
  step,
  value,
  setValue,
  labelFormatter,
}) => {
  useEffect(() => {
    const rangeInput = document.getElementById(id);
    const handleRangeChange = (e) => {
      setValue(e.target.valueAsNumber);
    };
    rangeInput.addEventListener("input", handleRangeChange);

    return () => {
      rangeInput.removeEventListener("input", handleRangeChange);
    };
  }, [id, setValue]);

  return (
    <div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={value}
      />
      <span>{labelFormatter(value)}</span>
    </div>
  );
};

export default RangeInput;
