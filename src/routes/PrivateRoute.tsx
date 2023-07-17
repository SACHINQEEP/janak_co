/* eslint-disable react/function-component-definition */
import { Navigate } from 'react-router'
import { SharedService } from '../features/shared/hooks/SharedService'


export type PrivateRouteProps = {
  outlet: JSX.Element
}

export default function PrivateRoute({ outlet }: PrivateRouteProps) {
  const { getPreviousPath } = SharedService()

  // if (getUser?.authToken) {
  //   return outlet
  // }

  console.log("outlet", outlet)

  if (
    getPreviousPath &&
    getPreviousPath?.length > 1 &&
    getPreviousPath[0].action === 'POP' &&
    getPreviousPath[0].location
  ) {
    return <Navigate to={getPreviousPath[0].location} replace={true} />
  }
}
