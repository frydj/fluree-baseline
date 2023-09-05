export const useLocalStorage = () => {
  function getValue(key) {
    return localStorage.getItem(key);
  }
  function setValue(key, val) {
    localStorage.setItem(key, val);
  }

  return {
    getValue,
    setValue,
  };
};
