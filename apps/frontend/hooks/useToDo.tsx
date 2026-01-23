import { create } from "zustand";

type TodoState = {
    task: string;
    setTask: (newTask: string) => void;
    clearTask: () => void;
};
export const useTodoStore = create<TodoState>((set) => ({
    task: "",
    setTask: (newTask: string) => set({ task: newTask }),
    clearTask: () => set({ task: "" })
}))