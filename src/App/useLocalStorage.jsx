import { useState, useEffect } from 'react';

function useLocalStorage(key, initValue) {
  const [data, setData] = useState(initValue);

  // Get item
  useEffect(() => {
    const localStorageData = localStorage.getItem(key);

    if (localStorageData) {
      setData(JSON.parse(localStorageData));
    } else {
      localStorage.setItem(key, JSON.stringify(initValue));
      setData([]);
    }
  }, []);

  // Save item
  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  }

  return [
    data,
    saveData
  ]
}

export { useLocalStorage }