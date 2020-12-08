import {FC, useEffect, useState} from "react";
import './Menu.css'
import {Button} from "../Button/Button";

interface IMenuItem {
    id: number;
    name: string;
    price: number;
}

interface IMenu {
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

    const displayBurgerMenu = (menu: IMenu) => {
        return  <ul className='burger-list'>
            {
                menu.Burgers?.map((burger: IMenuItem) => <>
                    <li key={burger.id}>
                        <Button
                            label="add"
                            className="add-button"
                            onClick={onAddToCart}/>
                        {`${burger.name} £${burger.price}`}
                    </li>

                    </>
                )

            }
            </ul>
    }

    const displaySidesMenu = (menu: IMenu) => {
        return  <ul className='burger-list'>
            {
                menu.Sides?.map((sides: IMenuItem) => <>
                        <li key={sides.id}>
                            <Button label="add"
                                    className="add-button"
                                    onClick={onAddToCart} />
                            {`${sides.name} £${sides.price}`}
                        </li>

                    </>
                )

            }
        </ul>
    }

    const displayDrinksMenu = (menu: IMenu) => {
        return  <ul className='burger-list'>
            {
                menu.Drinks?.map((drinks: IMenuItem) => <>
                        <li key={drinks.id}>
                            <Button label="add"
                                    className="add-button"
                                    onClick={onAddToCart}
                            />
                            {`${drinks.name} £${drinks.price}`}
                        </li>

                    </>
                )

            }
        </ul>
    }

return <div className="menu-container">
    <h3 className="menu-container_header">Menu</h3>
    <h4>Burgers</h4>

    {displayBurgerMenu(menuData)}

    <div>(All Burgers come with relish and burger sauce)
        (Chips for £1 with any burger)</div>

    <br />
    <h4>Sides</h4>
    {displaySidesMenu(menuData)}



    <h4>Drinks</h4>
    {displayDrinksMenu(menuData)}
</div>
}