import React, { useEffect, useImperativeHandle } from "react";
import { useState } from "react/cjs/react.development";

function ShowExpence(props) {
  return (
    <div>
      <div>
        <div>
          {props.balance.map((e, i) => {
            return (
              <div>
                <div key={i}>
                  {e.Amount && e.Amount.includes("+") ? (
                    <span style={{ color: "Green" }}>{e.Amount}</span>
                  ) : (
                    <span style={{ color: "red" }}>{e.Amount}</span>
                  )}
                  <span>{e.Text}</span>
                  <button onClick={()=>props.func(i)} >Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowExpence;
