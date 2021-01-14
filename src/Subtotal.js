import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {

    return (
        <div className="subtotal">
        <CurrencyFormat
    renderText={(value) => (
    <>
    <p>
    {/* Part of the homework */}
    Subtotal ( items): <strong>{value}</strong>
    </p>
    <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
    </small>
    </>
)}
    decimalScale={2}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
        />

        <button>Proceed to Checkout</button>
    </div>
);
}

export default Subtotal;