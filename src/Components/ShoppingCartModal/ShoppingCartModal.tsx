import React, { FC, useState } from "react";
import "./ShoppingCartModal.css";
import { Button } from "../Button/Button";
import { idGenerator } from "../../service/idGenerator";
import { IMenuItem } from "../../interfaces/IMenu";
import { Checkout } from "../Checkout/Checkout";

interface IShoppingCartModalProps {
  itemsAdded: IMenuItem[];
  onModalCloseClick: Function;
  decreaseItemNumber: Function;
  cartTotal: number;
}

export const ShoppingCartModal: FC<IShoppingCartModalProps> = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const switchToCheckout = () => {
    setIsCheckout(true);
  };

  const switchToCart = () => {
    setIsCheckout(false);
  };

  if (!isCheckout) {
    return (
      <div className="cart-modal" data-testid="cart-modal">
        <div className="close-container">
          <Button
            label="X"
            className="cart-modal_close"
            onClick={(e: React.ChangeEvent<HTMLInputElement>) => props.onModalCloseClick(e)}
          />
          <Button
            label={`Checkout`}
            className={`checkout-button`}
            onClick={switchToCheckout}
          />
        </div>
        <div className="cart-modal_total">TOTAL: £{props.cartTotal}</div>
        <div className="cart-modal_items-added">
          {
            <ul className="cart-list">
              {props.itemsAdded.map((item) => {
                return (
                  <li className={"cart-list_item"} key={idGenerator()}>
                    <Button
                      label="remove"
                      className={"cart-remove-button"}
                      onClick={() => props.decreaseItemNumber(item)}
                    />
                    {item.name} £{item.price}
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </div>
    );
  } else {
    return <Checkout total={props.cartTotal} items={props.itemsAdded} switchToCart={switchToCart} />;
  }
};
