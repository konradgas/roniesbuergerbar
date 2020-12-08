import {FC} from "react";
import {GoogleMap} from "../GoogleMap/GoogleMap";
import './ContentContainer.css'
import {AddressDetails} from "../AddressDetails/AddressDetails";
import {Menu} from "../Menu/Menu";

interface IContentContainerProps {
    onAddToCart: Function;
}

export const ContentContainer: FC<IContentContainerProps>  = ({onAddToCart}) => {

    return<div className="content-container">
        <GoogleMap />
        <AddressDetails />
        <Menu onAddToCart={onAddToCart}/>
    </div>
}