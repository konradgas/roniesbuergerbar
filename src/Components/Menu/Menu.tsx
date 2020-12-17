import React, { FC } from "react";
import "./Menu.css";
import { Button } from "../Button/Button";
import { idGenerator } from "../../service/idGenerator";
import { IMenu, IMenuItem } from "../../interfaces/IMenu";

interface IMenuProps {
  onAddToCart: Function;
  menuData: IMenu;
}

export const Menu: FC<IMenuProps> = ({ onAddToCart, menuData }) => {
  return (
    <div className="menu-container">
      <h3 className="menu-container_header">Menu</h3>
      <h4>Burgers</h4>

      <ul className="burger-list" data-testid="burger-list">
        {menuData.Burgers?.map((burger: IMenuItem) => (
          <li key={burger.id} data-testid={`burger-item-${burger.id}`}>
            <Button
              label="add"
              className={`add-button`}
              onClick={() =>
                onAddToCart({
                  ...burger,
                  id: idGenerator(),
                })
              }
            />
            {`${burger.name} £${burger.price}`}
          </li>
        ))}
      </ul>

      <div>
        (All Burgers come with relish and burger sauce) (Chips for £1 with any
        burger)
      </div>

      <br />
      <h4>Sides</h4>
      <ul className="sides-list">
        {menuData.Sides?.map((sides: IMenuItem) => (
          <li key={sides.id} data-testid={`sides-item-${sides.id}`}>
            <Button
              label="add"
              className={`add-button`}
              onClick={() =>
                onAddToCart({
                  ...sides,
                  id: idGenerator(),
                })
              }
            />
            {`${sides.name} £${sides.price}`}
          </li>
        ))}
      </ul>

      <h4>Drinks</h4>
      <ul className="drinks-list">
        {menuData.Drinks?.map((drinks: IMenuItem) => (
          <li key={drinks.id} data-testid={`drinks-item-${drinks.id}`}>
            <Button
              label="add"
              className={`add-button`}
              onClick={() =>
                onAddToCart({
                  ...drinks,
                  id: idGenerator(),
                })
              }
            />
            {`${drinks.name} £${drinks.price}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
