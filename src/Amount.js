import React, {useState, useCallback} from 'react';
import withStyles from 'react-jss';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  plusButton: {
    backgroundColor: theme.button.primary.backgroundColor,
    color: theme.button.primary.textColor,
  },
  minusButton: {
    backgroundColor: theme.button.danger.backgroundColor,
    color: theme.button.danger.textColor
  }
});

const Amount = ({classes, currencyList}) => {
  const [amount, setAmount] = useState(0);

  const updateAmount = (e) => {
    const seed = Number(e.currentTarget.value);
    setAmount(amount + seed);
  };


  return (
    <div>
      <span>US Dollar: {amount} </span>
      <Button variant="contained" color="primary"
              value={1} onClick={updateAmount}>+</Button>
      <span> | </span>
      <Button variant="contained" color="secondary"
              value={-1} onClick={updateAmount}>-</Button>
      <hr/>
      {currencyList.map((CurrencyComponent, idx) => (
        <CurrencyComponent amount={amount} key={idx}/>
      ))}
    </div>
  );
};

export default withStyles(styles)(Amount);
