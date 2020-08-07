interface ReducerState {
  prevLoc: { key: string }[];
  currLoc: { key: string };
}
interface Action {
  key: string;
}
const BreadcrumbsReducer = (state: ReducerState = { prevLoc: [], currLoc: { key: '' } }, action: Action): ReducerState => {
  let newState = { ...state };
  let newPrevLoc = [...newState.prevLoc];
  let newCurrLoc = { key: action.key };
  if (state.currLoc.key === action.key) {
    // already selected
    return { ...state, prevLoc: newPrevLoc, currLoc: newCurrLoc };
  }
  if (newPrevLoc.some((v) => v.key === action.key)) {
    // go backto last one
    newPrevLoc = newPrevLoc.slice(
      0,
      newPrevLoc.findIndex((loc) => loc.key === action.key)
    );
  } else {
    // add not visited before
    newPrevLoc.push(state.currLoc);
  }
  return { ...state, prevLoc: newPrevLoc, currLoc: newCurrLoc };
};

export default BreadcrumbsReducer;
