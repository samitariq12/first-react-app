import React from 'react';
import './App.css';
import Header from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';



function App() {
  return (
    // <GlobalContext.Provider value={transaction}
    // >
    // <div className="App">
    //     <Header/>
    //     <Balance/>
    //     <AccountSummary/>
    //     <TransactionHistory />
    //     <AddTransaction/>
      
    //   </div>
    //   </GlobalContext.Provider>
      <GlobalProvider>
    <div className="App">
    <Header/>
    <Balance/>
    <AccountSummary/>
    <TransactionHistory />
    <AddTransaction/>
      
    </div>
    </GlobalProvider>
  );
}

export default App;