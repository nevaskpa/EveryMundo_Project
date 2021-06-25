import axios from "axios";

export async function getCurrencies() {
  let currencies = new Map();
  let response = await axios.get(
    "https://gist.githubusercontent.com/Fluidbyte/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json"
  );

  for (const [key, value] of Object.entries(response.data))
    currencies.set(key, value.symbol);

  return currencies;
}
