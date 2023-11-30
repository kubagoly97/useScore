import { useContext } from "react";
import { Context } from "../context/Context";

export default function useProps() {
  const context = useContext(Context);
  return context;
}
