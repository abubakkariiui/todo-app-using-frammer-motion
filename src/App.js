import AddTask from "./components/AddTask/AddTask";
import { TaskProvider } from "./components/context/TaskContext";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <TaskProvider>
      <Header />
      <div className="container">
        <AddTask />
        <Tasks />
      </div>
    </TaskProvider>
  );
}

export default App;
