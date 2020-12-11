import React, { FC, useState } from "react";
import { Button } from "../Button/Button";
import "./Checkout.css";
import { IMenuItem } from "../../interfaces/IMenu";

interface ICheckout {
  items: IMenuItem[];
  switchToCart: Function;
  total: number;
}

export const Checkout: FC<ICheckout> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderState, setOrderState] = useState("");

  const onInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onInputChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSendOrderClick = async () => {
    await fetch("http://localhost:3001/api/order/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        email: email,
        total: props.total,
        items: props.items,
      }),
    })
      .then((res: Response) => res.json())
      .then((json) => setOrderState(json.message));
  };

  return (
    <div className="checkout-modal">
      <h3> Delivery Address</h3>
      <input
        className="checkout-modal_input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => onInputChangeName(e)}
        required
      />
      <input
        className="checkout-modal_input"
        type="email"
        placeholder="e-mail"
        value={email}
        onChange={(e) => onInputChangeEmail(e)}
      />
      <div className="checkout-modal_button-container">
        <Button
          label={`Cancel`}
          className="checkout-modal_cancel-button"
          onClick={(e: React.ChangeEvent<HTMLInputElement>) => props.switchToCart(e)}
        />
        <Button
          label={`Order`}
          className={`pay-button`}
          onClick={onSendOrderClick}
        />
      </div>
      {orderState && <h3>{orderState}</h3>}
    </div>
  );
};
