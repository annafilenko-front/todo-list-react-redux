import { SET_FILTER } from "../const/filterActionsConst"

export const filterActions = (hash) => {
  return{type: SET_FILTER, hash}
}