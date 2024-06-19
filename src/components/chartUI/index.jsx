import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({options,series,type,width})=>{
    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type={type}
          width={width}
        />
      </div>
    );
  
	}

export default Chart;
