import React, { useState } from "react";
import ReactDom from "react-dom";
import "./style.css";
import AddCash from "./AddCash";
import ShowExpence from "./showExpence";
function App() {
  const [balance, Setbalance] = useState([]);
  

  const getData = (e, text) => {
    Setbalance((prev) => [
      ...prev,
      {
        Amount: e,
        Text: text,
      },
    ]);
  };

  const renderBalance = () => {
    let add = 0
    for(let i = 0 ;i<balance.length;i++){
      add = add + parseInt(balance[i].Amount)
    }
    return add
  };

  const renderIncome=()=>{  
    let add = 0
    for(let i = 0 ;i<balance.length;i++){
      if(balance[i].Amount.includes('+')){
      add = add + parseInt(balance[i].Amount)
    }
  }
    return add
  }

  
  const renderExpense=()=>{
    let add = 0
    for(let i = 0 ;i<balance.length;i++){
      if(balance[i].Amount.includes('-')){
      add = add - parseInt(balance[i].Amount)
    }
  }
    return add
  }
  console.log(balance);

  const deletee=(e)=>{
    let temp =  [...balance]
   temp.splice(e,1)
    Setbalance(temp)
  }

  return (
    <div className={"outline"}>
      <div className={"heading"}>
        <h1>Expense Tracker</h1>
      </div>
      <br />
      <div className={"heading"}>
        <h3>Your Balance</h3>
        <div className={"heading"}>
          <h2>{renderBalance()} </h2>
        </div>
      </div>
      <div className={"heading"}>
        <div className={"databox"}>
          <div className={"showincome"}>
            Income
            <span className={"showincomee"}>{renderIncome()}</span>
          </div>

          <div className={"showexpense"}>
            Expense
            <span className={"showexpensee"}>{renderExpense()}</span>
          </div>
        </div>
      </div>
      <AddCash func={getData}  />
      <div></div>
      <div>
        <ShowExpence balance={balance} func={deletee} ></ShowExpence>
      </div>
    </div>
  );
}
export default App;

ReactDom.render(<App />, document.querySelector("#root"));
