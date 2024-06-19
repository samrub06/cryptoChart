import { formater } from "../utils";

export const options = {
  title: {
    text: "Top 10 Cryptocurrencies by Market Cap",
    align: "left",
  },
  subtitle: {
    text: "The crypto Cureency over market cap variable ",
    align: "left",
  },
  responsive: [
    {
      breakpoint: 1000,
      options: {
        title: {
          align: "middle",
        },
        subtitle: {
          align: "middle",
        },
      },
    },
  ],
  annotations: {
    yaxis: [
      {
        x: "bitcoin",
        y: 1278889988882,
        seriesIndex: 0,
        borderColor: "#64A4D1",
        label: {
          borderColor: "#64A4D1",
          style: {
            color: "white",
            background: "#64A4D1",
          },
          orientation: "horizontal",
          text: "Highest Market Cap",
        },
      },
    ],
  },
  chart: {
    foreColor: "black",
    background: "#fff",
    toolbar: {
      show: true,
      tools: {
        pan: false,
        download: '<img src="/downloadIcon.png"/>',
        reset: '<img src="/resetIcon.png" width="20px" />',
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      borderRadiusApplication: "end",
      columnWidth: "50%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return formater.format(val);
    },
    style: {
      fontSize: "14px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#402E7A", "#402E7A"],
    },
    distributed: true,
  },
  stroke: {
    width: 1,
  },
  grid: {
    row: {
      colors: ["#fff", "#f2f2f2"],
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val.toLocaleString() + " $";
      },
    },
  },
  xaxis: {
    title: {
      text: "Crypto Currency",
    },
    labels: {
      rotate: -45,
    },
    type: "category",
    tickPlacement: "on",
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      formatter: function (val) {
        return formater.format(val);
      },
      distributed: true,
    },
  },
  legend: {
    show: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100],
    },
  },
};
