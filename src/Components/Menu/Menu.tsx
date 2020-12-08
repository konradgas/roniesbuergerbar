import {FC, useEffect, useState} from "react";
import './Menu.css'
import {Button} from "../Button/Button";
import {idGenerator} from "../../service/idGenerator";

export interface IMenuItem {
    id: number;
    name: string;
    price: number;
}

export interface IMenu {
    Burgers: IMenuItem[];
    Sides: IMenuItem[];
    Drinks: IMenuItem[];
}

interface IMenuProps {
    onAddToCart: Function;
}

export const Menu: FC<IMenuProps> = ({onAddToCart}) => {
    const [menuData, setMenuData] = useState({} as IMenu);

    const getData=()=>{
        fetch('menu.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setMenuData(myJson)
            });
    }

    useEffect(() => {
        getData();
    }, []);

return <div className="menu-container">
    <h3 className="menu-container_header">Menu</h3>
    <h4>Burgers</h4>

    <ul className='burger-list'>
        {
            menuData.Burgers?.map((burger: IMenuItem) => <>
                    <li>
                        <Button
                            key={burger.name}
                            label="add"
                            className="add-button"
                            onClick={() => onAddToCart({
                                ...burger,
                                id: idGenerator()})}/>
                        {`${burger.name} £${burger.price}`}
                    </li>

                </>
            )

        }
    </ul>

    <div>(All Burgers come with relish and burger sauce)
        (Chips for £1 with any burger)</div>

    <br />
    <h4>Sides</h4>
    <ul className='burger-list'>
        {
            menuData.Sides?.map((sides: IMenuItem) => <>
                    <li>
                        <Button label="add"
                                key={sides.name}
                                className="add-button"
                                onClick={() => onAddToCart({
                                    ...sides,
                                    id: idGenerator()})} />
                        {`${sides.name} £${sides.price}`}
                    </li>

                </>
            )

        }
    </ul>

    <h4>Drinks</h4>
    <ul className='burger-list'>
        {
            menuData.Drinks?.map((drinks: IMenuItem) => <>
                    <li>
                        <Button label="add"
                                key={drinks.name}
                                className="add-button"
                                onClick={() => onAddToCart({
                                    ...drinks,
                                    id: idGenerator()})}
                        />
                        {`${drinks.name} £${drinks.price}`}
                    </li>

                </>
            )

        }
    </ul>
</div>
}