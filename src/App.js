import React from 'react';
import './App.css';
import Amount from './Amount';
import {ThemeProvider} from 'react-jss';

const theme = {
  button: {
    primary: {backgroundColor: '#007bff', textColor: '#fff'},
    danger: {backgroundColor: '#bd2130', textColor: '#fff'},
  }
};

const Euro = ({amount}) => <p>Euro: {(amount * 0.86).toFixed(4)}</p>;
const Pound = ({amount}) => <p>Pound: {(amount * 0.76).toFixed(4)}</p>;

const CurrenciesWithAmount = () => {
  return (<Amount currencyList={[Euro, Pound]}></Amount>);
};

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <h1>Currency Converter</h1>
      <CurrenciesWithAmount/>
    </div>
  </ThemeProvider>
);

export default App;
