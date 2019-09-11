import React, {useState} from 'react';
import withStyles from 'react-jss';

const styles = {
  plusButton: {
    backgroundColor: 'green',
    color: '#fff'
  },
  minusButton: {
    backgroundColor: 'red',
    color: '#fff'
  }
};

const Amount = ({classes, currencyList}) => {
  const [amount, setAmount] = useState(0);

  const updateAmount = (e) => {
    const seed = Number(e.target.value);
    setAmount(amount + seed);
  };

  return (
    <div>
      <span>US Dollar: {amount} </span>
      <button className={classes.plusButton} type="button"
              value={1} onClick={updateAmount}>+</button>
      <span> | </span>
      <button className={classes.minusButton} type="button"
              value={-1} onClick={updateAmount}>-</button>
      <hr />
      {currencyList.map(CurrencyComponent => (
        <CurrencyComponent amount={amount}/>
      ))}
    </div>
  );
};

export default withStyles(styles)(Amount);
