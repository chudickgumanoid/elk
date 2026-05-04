import { toLocaleStringNumberRu } from "./toLocaleStringNumberRu";

export const parseBillsCoins = (objectillsCoins, typeParse = "number") => {
  if (typeof objectillsCoins != "object") return "0.00";

  if (objectillsCoins == null) {
    return null;
  }

  if (typeParse === "number") {
    return Number(`${objectillsCoins.bills}.${objectillsCoins.coins}`);
  }

  return toLocaleStringNumberRu(
    Number(`${objectillsCoins.bills}.${objectillsCoins.coins}`)
  );
};
