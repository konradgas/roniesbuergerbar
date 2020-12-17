import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { HeaderContainer } from "./HeaderContainer/HeaderContainer";
import { ContentContainer } from "./ContentContainer/ContentContainer";
import { ShoppingCartModal } from "./ShoppingCartModal/ShoppingCartModal";
import { IMenu, IMenuItem } from "../interfaces/IMenu";
import {Login} from "./Login/LoginScreen/Login";

const App: FC = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cart, setCart] = useState([] as IMenuItem[]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [menuData, setMenuData] = useState({} as IMenu);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch("http://localhost:3001/api/menu", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((menuJson) => {
        setMenuData(menuJson);
      }).catch(e => console.error(e));
  };

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total = total + item.price));
    setCartTotal(total);
  }, [cart]);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item: any) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsLoginModalOpen(false);
  };

  const closeModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsModalOpen(false);
  };

  const closeLoginModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoginModalOpen(false);
  }

  const toggleLoginModal = () => {
    setIsModalOpen(false);
    setIsLoginModalOpen(!isLoginModalOpen)
  }

  const showModal = () => {
    if (isModalOpen) {
      return (
        <div className="modal-container">
          <ShoppingCartModal
            cartTotal={cartTotal}
            itemsAdded={cart}
            onModalCloseClick={closeModal}
            decreaseItemNumber={removeFromCart}
          />
        </div>
      );
    }
  };

  const showLoginModal = () => {
    if (isLoginModalOpen) {
      return (
          <div className="login-modal-container">
            <Login
                onModalCloseClick={closeLoginModal}
            />
          </div>
      );
    }
  };

  return (
    <>
      <div className="App">
        {showModal()}{showLoginModal()}
        <header className="App-header">
          <HeaderContainer
            cartItemCount={cartItemCount}
            onCartButtonClick={toggleModal}
            onLoginButtonClick={toggleLoginModal}
          />
        </header>
        <ContentContainer menuData={menuData} onAddToCart={addToCart} />
      </div>
    </>
  );
};

export default App;
