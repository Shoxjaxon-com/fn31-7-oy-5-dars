import { create } from "zustand";

const useTodoStore = create((set) => ({
    todo: [],

    addTodo: (value) => {
        set((state) => ({
            todo: [...state.todo, { text: value, completed: false }] 
        }));
    },

    removeTodo: (index) => {
        set((state) => ({
            todo: state.todo.filter((_, i) => i !== index) 
        }));
    },

    toggleComplete: (index) => {
        set((state) => ({
            todo: state.todo.map((item, i) =>
                i === index ? { ...item, completed: !item.completed } : item 
            )
        }));
    }
}));

export default useTodoStore;
