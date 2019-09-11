import React, {useState} from 'react';

const Euro = ({ amount }) => <p>Euro: {(amount * 0.86).toFixed(4)}</p>;
const Pound = ({ amount }) => <p>Pound: {(amount * 0.76).toFixed(4)}</p>;

const Amount = () => {
  const [amount, setAmount] = useState(0);

  const updateAmount = (e) => {
    const seed = Number(e.target.value);
    setAmount(amount + seed);
  };

  return (
    <div>
      <span>US Dollar: {amount} </span>
      <button type="button" value={1} onClick={updateAmount}>+</button>
      <span> | </span>
      <button type="button" value={-1} onClick={updateAmount}>-</button>
      <hr />
      <Euro amount={amount} />
      <Pound amount={amount} />
    </div>
  );
};



export default Amount;
