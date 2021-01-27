import axios from "axios";

export const getCurrentRate  = async () => {
    const rates =  await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
    return {prices: rates};
}