import React, { Component } from "react";

//Импорт компонентов
import Header from "../components/header";

class UserAccount extends React.Component {
  render() {
    return (
      <div className="">
        <Header buttons={this.buttons} />
      </div>
    );
  }
  //Передаваемые кнопки в футер
  buttons = [
    <p onClick={() => {}}>О нас</p>,
    <p onClick={() => {}}>Библиотека</p>,
    <p onClick={() => {}}>Переводчик</p>,
    <button className="buttonWhite" onClick={() => {}}>
      Выход
    </button>,
  ];
}
export default UserAccount;
