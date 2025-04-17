const setItemToLocalStorage = (storageKey, todos) => {
  localStorage.setItem(storageKey, JSON.stringify(todos));
}

export default setItemToLocalStorage;