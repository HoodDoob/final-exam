import { useContext } from "react";
import { TextModifierContext } from "./TextModifier";
import { useRouter } from "next/router";

export default function Button(props) {
  const router = useRouter();

  const { handleButtonClick, modifyEnabled } = useContext(TextModifierContext);

  function chairButtonClick() {
    if (modifyEnabled == false) {
      handleButtonClick();
    } else if (modifyEnabled) {
      handleButtonClick();
      router.replace(router.asPath);
      console.log("current page");
    }
  }

  return <button onClick={() => chairButtonClick()}>{props.children}</button>;
}
