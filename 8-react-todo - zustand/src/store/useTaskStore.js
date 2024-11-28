import { create } from "zustand";

const useTaskStore = create((set) => ({
    tasks : [
        { id: 1, task: "Wake up at 6:30 AM", isDone: false },
        { id: 2, task: "Exercise for 30 minutes", isDone: true },
        { id: 3, task: "Breakfast at 7:30 AM", isDone: false },
        { id: 4, task: "Prepare for bed at 9:30 PM", isDone: false },
        { id: 5, task: "Sleep by 10:30 PM", isDone: true },
    ],
   addTask: () => {},
   addTask : (newTask) =>set((state) =>({tasks:[...state.tasks,newTask]})),
   removeTask: (taskId) => set((state) => ({tasks : state.tasks.filter (el => el.id !== taskId)
   }
   )),
   doneTask : (taskId) => set ((state) => ({tasks : state.tasks.map (el =>el.id === taskId ? {...el, isDone : !el.isDone} : el)})
    
)

}));
 

export default useTaskStore;