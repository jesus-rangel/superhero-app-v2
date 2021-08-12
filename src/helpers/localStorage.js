// Functions for setting and retrieving the team from LocalStorage

export const getLocal = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  if (!value) {
    return defaultValue;
  }
  return JSON.parse(value);
};

export const setLocal = (key, value) => {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
};
