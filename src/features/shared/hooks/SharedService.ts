import { Action, Location } from 'history';
import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../main-store/hooks';

import { getErrorMsg, getLoading, getPreviousPaths, SharedAction } from '../store/shared.redux';


export type SharedServiceOperators = {
  getErrorMsg: string
  setErrorMsg: (msg: string) => void
  setLoader: (loading: boolean) => void
  isLoading: boolean,
  getPreviousPath: {
    location?: Location | null;
    action?: Action | null;
  }[] | undefined
}

/**
 * PostService custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const SharedService = (): Readonly<SharedServiceOperators> => {
  const dispatch = useAppDispatch()

  return {
    getErrorMsg: useAppSelector(getErrorMsg),
    setErrorMsg: useCallback(
      (msg: string) => {
        dispatch(SharedAction.setErrorMsg(msg))
      },
      [dispatch],
    ),
    isLoading: useAppSelector(getLoading),
    setLoader: useCallback(
      (msg: boolean) => {
        dispatch(SharedAction.setLoader(msg))
      },
      [dispatch],
    ),

    getPreviousPath: useAppSelector(getPreviousPaths)
  }
}

export default SharedService
