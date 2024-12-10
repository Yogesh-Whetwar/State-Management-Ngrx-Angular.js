
import { createSelector } from "@ngrx/store";
import { AppState } from "../app.config";

export const selectCounterState = (state : AppState)=> state.counter;

export const selectCount= createSelector(
    selectCounterState,
    (state)=>state.count
)