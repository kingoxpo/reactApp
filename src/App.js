import { useEffect, useState } from "react/cjs/react.development";

function BitToKRW() {
  const [amount, setAmount] = useState();
  const [inverted, setInverted] = useState(false);
  const onChange = event => {
    setAmount(event.target.value);
  };
  const resetAmount = () => setAmount("");
  const onInvert = () => {
    resetAmount();
    setInverted(current => !current);
  };
  return (
    <div>
      <div>
        <input
          value={inverted ? (amount * 0.01).toFixed(2) : amount}
          placeholder="비트코인(BIT)"
          type="number"
          onChange={onChange}
          disabled={inverted}
          id="BIT"
        />
        <label htmlFor="BIT">파운드(£)</label>
      </div>
      <div>
        <input
          value={inverted ? (amount * 0.2).toFixed(2) : amount}
          placeholder="원(WON)"
          type="number"
          onChange={onChange}
          disabled={!inverted}
          id="KRW"
        />
        <label htmlFor="KRW">파운드(£)</label>
      </div>
      <button onClick={resetAmount}>새로고침</button>
      <button onClick={onInvert}>
        {inverted ? "단위전환 비트코인 > 원 " : "단위전환 원 > 비트코인"}
      </button>
    </div>
  );
}

export default function App() {
  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  const [coinId, setCoinId] = useState("");
  const onSelect = event => {
    setCoinId(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to coin of the world {loding ? "" : `(${coins.length})`}</h1>
      {loding ? (
        <strong>Loading...</strong>
      ) : (
        <select value={coins.id}>
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price.toFixed(2)}{" "}
              USD
            </option>
          ))}
        </select>
      )}
      <hr />
    </div>
  );
}
