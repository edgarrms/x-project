import React from "react";
import CardContext from "../../utils/CardContext";

function CardTitleText() {
  return <CardContext.Consumer>{({ Fuck My EX }) => <h2>{Fuck My EX}</h2>}</CardContext.Consumer>;
}

export default CardTitleText;
