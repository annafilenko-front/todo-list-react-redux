import { SET_FILTER } from "../const/filterActionsConst"

const defaultStateFilter = window.location.hash || '#/'

export const filterReducer = (state = defaultStateFilter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.hash
    default:
      return state
  }
}