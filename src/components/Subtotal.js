import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider';

function Subtotal() {
   const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Homework!! */}
              Subtotal ({basket.length} items): <strong>${basket.reduce((acc, item) => {
               return acc + item.price
              }, 0)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} //homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        
        <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
