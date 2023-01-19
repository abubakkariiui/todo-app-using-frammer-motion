import AddTask from "./components/AddTask/AddTask";
import { TaskProvider } from "./components/context/TaskContext";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import PopUp from "./components/PopUp/PopUp";
function App() {
  return (
    <TaskProvider>
      <PopUp />
      <Header />
      <div className="container">
        <AddTask />
        <Tasks />
      </div>
    </TaskProvider>
  );
}

export default App;
