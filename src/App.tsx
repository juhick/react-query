import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <>
      <TasksProvider>
        <AuthProvider>
          <NavBar />
          <HomePage />
        </AuthProvider>
      </TasksProvider>
    </>
  );
}

export default App;
