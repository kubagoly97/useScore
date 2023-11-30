import { useContext } from "react";
import { Context } from "../context/Context";

export default function useProps() {
  const context = useContext(Context);
  if (!context) {
    throw Error("useContext must be used inside an ContextProvider");
  }
  return context;
}
