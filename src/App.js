import React from 'react';
import './App.css';
import Amount from  './Amount';

const Euro = ({ amount }) => <p>Euro: {(amount * 0.86).toFixed(4)}</p>;
const Pound = ({ amount }) => <p>Pound: {(amount * 0.76).toFixed(4)}</p>;

const CurrenciesWithAmount = () => {
  return (<Amount currencyList={[Euro, Pound]}></Amount>);
};

const App = () => (
  <div>
    <h1>Currency Converter</h1>
    <CurrenciesWithAmount />
  </div>
);

export default App;
