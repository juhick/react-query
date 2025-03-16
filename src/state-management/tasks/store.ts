import { create } from "zustand";

type Task = {
  id: number;
  title: string;
};

type TasksStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
};

const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],
  addTask: (task: Task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  deleteTask: (taskId: number) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));

export default useTasksStore;
