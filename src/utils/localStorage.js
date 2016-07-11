export const setItem = (id, data) => {
  try {
    return window.localStorage.setItem(id, data)
  } catch (e) {
    return undefined
  }
}

export const deleteItem = id => {
  try {
    return window.localStorage.removeItem(id)
  } catch (e) {
    return undefined
  }
}
export const getItem = id => {
  try {
    return window.localStorage.getItem(id)
  } catch (e) {
    return undefined
  }
}
