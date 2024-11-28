import { create } from "zustand";

// const useCounterStore = create(function(set){
//     return{
//         count : 5,
//         resetCount : function(){
//         return set ({count : 0})
//         },
//         increaseCount : function (amount){
//             return set (function(state){
//                 return {
//                     count : state.count + amount,
//                 }
//             })
//         }
        
//     }
// });

const useCounterStore =create((set) => ({
count : 3,
resetCount : () => {
    set({count : 0})},
    increaseCount: (amount) => set((State) => ({count : State.count + amount})
    ),
    decreaseCount : (amount) => set ((State) => ({count: State.count - amount}))
}))
export default useCounterStore;