import React from "react";
import CardBtn from "../CardBtn";
import CardContext from "../../utils/CardContext";
import CardTitle from "../CardTitle";
import "./style.css";

function Card() {
  return (
    // The most straightforward solution would be to add the Consumer to the Card component.
    // This way, all Card components can have the Card context passed directly as props
    <CardContext.Consumer>
      {({ image, handleBtnClick }) => (
        <div class="card w-75"
          className="card"
          style={{
            backgroundImage: image ? `url(${image})` : "none"
          }}
        >

          <h5 class="card-title">Card title</h5>
          <a href="#" class="btn btn-primary">Button</a>
          <p class="card-text">First card text here.</p>
          {/* Here, we do not pass the title to demonstrate that it can also be consumed from the CardTitleText component */}
          <CardTitle />
          {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
          <CardBtn style={{ opacity: image ? 1 : 0 }} onClick={handleBtnClick} data-value="back" />
          <CardBtn style={{ opacity: image ? 1 : 0 }} onClick={handleBtnClick} data-value="next" />
        </div>
      )}
    </CardContext.Consumer>
  );
}

export default Card;
