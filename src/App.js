import { Suspense, useEffect, useState } from "react";
import useSWR from "swr";
import Chart from "./components/chartUI";
import CheckboxInput from "./components/checkboxInput";
import RangeInput from "./components/rangeInput";
import { options } from "./config/barChartOptions";
import { cryptoUrl } from "./constant";
import { fetcher, formater } from "./utils";
function App() {
  const { data,error, isLoading, mutate } = useSWR
  (cryptoUrl, fetcher);
console.log(isLoading);
  const [optionChart, setOptionChart] = useState(options);
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  console.log(selectedCategories);
  const [rangeValue, setRangeValue] = useState(17154284071);
  const getMarketCapData = data
  ?.filter((x) => selectedCategories.includes(x.id))
  ?.map((x) => ({ y: x.market_cap, x: x.id })) || [];

  const [series, setSeries] = useState([
    {
      name: "Market Cap",
      data: getMarketCapData,
    },
  ]);

  useEffect(() => {
    if (data) {
      const initialCategories = data.map((x) => x.id);
      setSelectedCategories(initialCategories);
    }
  }, [data]);

  const handleChangeTheme = () =>{
      setOptionChart({
        ...optionChart,
        chart: {
          background:
            optionChart.chart.background === "#1e293b" ? "white" : "#1e293b",
          foreColor:
            optionChart.chart.foreColor === "white" ? "black" : "white",
        },
      });
    };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCategories((prevSelectedCategories) => {
      const newSelectedCategories = checked
        ? [...prevSelectedCategories, name]
        : prevSelectedCategories.filter((category) => category !== name);
      return newSelectedCategories;
    });
  };

  useEffect(() => {
    setSeries([
      {
        name: "Market Cap",
        data: data
          ?.filter((x) => x.market_cap > rangeValue)
          ?.filter((x) => selectedCategories.includes(x.id))
          ?.map((x) => ({ y: x.market_cap, x: x.id })),
      },
    ]);
  }, [selectedCategories, rangeValue]);

    if (isLoading || data.length <2) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error loading data</div>;
    }

    console.log("selectedCategories", selectedCategories);

  return (
    <div className="App">
      <RangeInput
        id="rangeInput"
        min={10000000000}
        max={101000000000}
        step={100000000}
        value={rangeValue}
        setValue={setRangeValue}
        labelFormatter={formater.format}
      />
      {data && (
        <CheckboxInput
          data={data}
          selectedElement={selectedCategories}
          handleCheckboxChange={handleCheckboxChange}
        />
      )}
      <button id="toggleButton" onClick={handleChangeTheme}>
        {optionChart.chart.background === "white" ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={()=>mutate()}>Refresh</button>
      <Suspense fallback={<div>Loading...</div>}>
         <Chart options={optionChart} series={series} type="bar" />
      </Suspense>
    </div>
  );
}

export default App;
