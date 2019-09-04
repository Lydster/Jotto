import React from "react";
import { prependOnceListener } from "cluster";

const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulations!</span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
export default Congrats;
