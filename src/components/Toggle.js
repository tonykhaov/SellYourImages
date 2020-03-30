import { useState } from "react";

function Toggle(props) {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
    console.log(on);
  };
  const { children } = props;
  return children({ on, toggle });
}

export default Toggle;
