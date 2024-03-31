import { create } from "zustand";

const useUserNameStore = create((set) => ({
  userName: localStorage.getItem("userName") || "", // Versuche den Benutzernamen aus dem Local Storage abzurufen
  setUserName: (name) => {
    localStorage.setItem("userName", name); // Speichere den Benutzernamen im Local Storage
    set({ userName: name });
  },
}));

export default useUserNameStore;
