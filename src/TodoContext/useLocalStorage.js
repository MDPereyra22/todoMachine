import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItems;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItem);
          setItem(parsedItems);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    const newTodosParsed = JSON.stringify(newItem);
    localStorage.setItem(itemName, newTodosParsed);
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}
