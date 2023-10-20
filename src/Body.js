import React from "react";
import Header from "./Header";
function Body(props) {
  return (
    <section>
      <Header {...props} />
      {props.children}
    </section>
  );
}

export default Body;
