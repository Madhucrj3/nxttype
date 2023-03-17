import React from "react";
import { Navigate } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { LoginStore } from "../../stores/LoginStore";
interface ProtectedProps {
  children: React.ReactElement;
}
interface InjectedProtectedProps extends ProtectedProps {
  loginStore: LoginStore;
}
const ProtectedRoute = inject("loginStore")(
  observer((props: ProtectedProps): React.ReactElement => {
    const { children } = props;
    const { loginStore } = props as InjectedProtectedProps;
    if (!loginStore.isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  })
);
export default ProtectedRoute;
