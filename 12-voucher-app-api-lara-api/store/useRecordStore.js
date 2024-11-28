import toast from "react-hot-toast";
import { create } from "zustand";

const useRecordStore = create((set) => ({
  records: [],
  // addRecord: (record) => {
  //   set((state) => ({ records: [...state.records, record] }));
  // },

  addRecord: (record) =>
    set((state) => {
      const isExist = state.records.some(
        (r) => r.product_id === record.product_id
      );
      if (isExist) {
        toast("Product Already Exist.So quantity heaved be added");
        return {
          records: state.records.map((r) =>
            r.product_id === record.product_id
              ? { ...r, quantity: r.quantity + record.quantity }
              : r
          ),
        };
      }
      return {
        records: [...state.records, record],
      };
    }),
  removeRecord: (id) => {
    set((state) => ({
      records: state.records.filter((record) => record.id !== id),
    }));
  },

  changeQuantity: (id, quantity) => {
    
    set((state) => (
      ({
        records: state.records.map((record) => {
          if (record.id === id) {
            const newQuantity = parseInt(record.quantity) + parseInt(quantity);
            const newCost = record.price * newQuantity;
            return { ...record, quantity: newQuantity, cost: newCost };
          }
          return record;
        }),
      })
    ));
  },

  resetRecord: () => set({ records: [] }),
}));

export default useRecordStore;
