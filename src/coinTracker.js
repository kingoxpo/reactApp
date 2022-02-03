import { useEffect, useState } from "react/cjs/react.development";

export default function App() {
  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [userMoney, setUserMoney] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoding(false);
      });
  }, []);

  // const inputPriceFormat = str => {
  //   const comma = str => {
  //     str = String(str);
  //     return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   };
  //   const uncomma = str => {
  //     str = String(str);
  //     return str.replace(/[^\d]+/g, "");
  //   };
  //   return comma(uncomma(str));
  // };
  return (
    <div>
      <h1>Welcome to the coin world {loding ? "" : `(${coins.length})`}</h1>
      <h2>How much do you have?</h2>
      <input
        // onChange={e => setUserMoney(inputPriceFormat(e.target.value))}
        onChange={e => setUserMoney(e.target.value)}
        type="text"
        value={userMoney}
        placeholder="Please write your KRW"
      />
      <label>원(₩)</label>
      <hr />
      {loding ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}):{" "}
              {userMoney / 1205.6 / coin.quotes.USD.price} {coin.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
