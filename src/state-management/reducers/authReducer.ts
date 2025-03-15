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

export default authReducer;
