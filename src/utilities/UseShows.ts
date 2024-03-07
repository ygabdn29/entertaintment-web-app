import { useContext } from "react";
import { ShowsContext } from "../context/ShowsContext";

function useShows() {
  const contextValue = useContext(ShowsContext);

  if (!contextValue) {
    throw new Error("ShowsContext was used outside of ShowsProvider");
  }

  return contextValue;
}

export { useShows };
