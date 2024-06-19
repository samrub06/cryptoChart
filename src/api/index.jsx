import axios from "axios";

export const fetchCryptoData = async () => {
  try {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&x_cg_demo_api_key=CG-YoRMorw84Hfac5sXzTM2YoH"
    );
    return result;
  } catch (err) {
        console.error("Error fetching data from API:", err);
  }
};
