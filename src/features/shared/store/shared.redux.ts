import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../main-store/store';

export interface SharedState {
  errorMsg: string
  loading: boolean
}

const initialState: SharedState = {
  errorMsg: '',
  loading: false,
}

// slice
export const SharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setErrorMsg(state, action: PayloadAction<string>) {
      state.errorMsg = action.payload
    },
    setLoader(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
})
// Actions
export const SharedAction = {
  setErrorMsg: SharedSlice.actions.setErrorMsg,
  setLoader: SharedSlice.actions.setLoader
}

// Selectors
export const getErrorMsg = (state: RootState) => state.shared.errorMsg
export const getLoading = (state: RootState) => state.shared.loading
export const getPreviousPaths = (state: RootState) => state.router.previousLocations

// Reducer
export default SharedSlice.reducer
