interface Login {
  type: "LOGIN";
  userName: string;
}

interface Logout {
  type: "LOGOUT";
}

type authAction = Login | Logout;

const authReducer = (status: string, action: authAction): string => {
  switch (action.type) {
    case "LOGIN":
      return (status = action.userName);
    case "LOGOUT":
      return (status = "");
  }
};

export default authReducer;
