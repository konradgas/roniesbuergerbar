import { FC } from "react";
import { Button } from "../Button/Button";
import "./Checkout.css";
import { IMenuItem } from "../../interfaces/IMenu";

interface ICheckout {
  items: IMenuItem[];
  switchToCart: Function;
}

export const Checkout: FC<ICheckout> = (props) => {
  return (
    <form className="checkout-modal">
      <h3> Delivery Address</h3>
      <input
        className="checkout-modal_input"
        type="text"
        placeholder="Name"
        required
      />
      <input
        className="checkout-modal_input"
        type="text"
        placeholder="Surname"
      />
      <input
        className="checkout-modal_input"
        type="email"
        placeholder="e-mail"
      />
      <input
        className="checkout-modal_input"
        placeholder="Street and house number"
        required
      />
      <input className="checkout-modal_input" placeholder="City" required />
      <input className="checkout-modal_input" placeholder="County" />
      <div className="checkout-modal_button-container">
        <Button
          label={`Cancel`}
          className="checkout-modal_cancel-button"
          onClick={props.switchToCart}
        />
        <Button
          label={`Order`}
          className={`pay-button-disabled`}
          disabled={true}
        />
      </div>
    </form>
  );
};
