import React, {useState} from 'react';

const Amount = (currencyComponents) => {
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
      {currencyComponents.map(CurrencyComponent => (
        <CurrencyComponent amount={amount} />
      ))}
    </div>
  );
};

export default Amount;
