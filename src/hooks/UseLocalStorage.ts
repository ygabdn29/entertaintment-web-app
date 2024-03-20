import { useEffect, useState } from "react";

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue) || [];
  });

  useEffect(
    function () {
      localStorage.setItem("shows", JSON.stringify(value));
    },
    [value, setValue]
  );

  return [value, setValue];
}
