import {IMenu, IMenuItem} from "../Menu/Menu";
import {FC} from "react";
import './ShoppingCartModal.css'
import {Button} from "../Button/Button";
import {idGenerator} from "../../service/idGenerator";

interface IShoppingCartModalProps {
    itemsAdded: IMenuItem[];
    onModalCloseClick: Function;
    decreaseItemNumber: Function;
    cartTotal: number;
}

export const ShoppingCartModal: FC<IShoppingCartModalProps> = (props) => {

    return <div className="cart-modal">
        <div className="close-container"><Button label="X" className="cart-modal_close" onClick={props.onModalCloseClick} /></div>
        <div className="cart-modal_total">TOTAL: {props.cartTotal}</div>
        <div className="cart-modal_items-added">
            {
                <ul className="cart-list">
                    {props.itemsAdded.map(item => {
                        return <li className={'cart-list_item'} key={idGenerator()}>
                            <Button
                                label="remove"
                                className={"cart-remove-button"}
                                onClick={() => props.decreaseItemNumber(item)} />
                            {item.name} £{item.price}
                        </li>;
                    })
                    }
                </ul>
            }
        </div>
    </div>
}