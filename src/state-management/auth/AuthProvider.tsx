import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface Props {
  children: ReactNode;
}

interface Login {
  type: "LOGIN";
  userName: string;
}

interface Logout {
  type: "LOGOUT";
}

export type AuthAction = Login | Logout;

const authReducer = (status: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return (status = action.userName);
    case "LOGOUT":
      return (status = "");
  }
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
