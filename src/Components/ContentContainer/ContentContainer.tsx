import { FC } from "react";
import { GoogleMap } from "../GoogleMap/GoogleMap";
import "./ContentContainer.css";
import { AddressDetails } from "../AddressDetails/AddressDetails";
import { Menu } from "../Menu/Menu";
import { IMenu } from "../../interfaces/IMenu";

interface IContentContainerProps {
  onAddToCart: Function;
  menuData: IMenu;
}

export const ContentContainer: FC<IContentContainerProps> = ({
  menuData,
  onAddToCart,
}) => {
  return (
    <div className="content-container">
      <GoogleMap />
      <AddressDetails />
      <Menu menuData={menuData} onAddToCart={onAddToCart} />
    </div>
  );
};
