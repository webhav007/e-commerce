import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from '../components/data/userdata';





// Define the shape of your state
interface State {
  users: User[];
  count: number;
  addUser: (user: User) => void;
  updateUser: (id: number, newUser: Partial<User>) => void; // Add this line
  passwordChanger: (id: number, createNewPassword: string) => void;
  increaseCount: () => void;

  
}

// Define the global store function with typing for `set`
const globalStore = (set: (fn: (state: State) => Partial<State>) => void) => ({
  users: [],
  count: 1,
  addUser: (user: User) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
  updateUser: (id: number, newUser: Partial<User>) => { // Add this function
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...newUser } : user
      ),
    }));
  },
  passwordChanger: (id: number, createNewPassword: string) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, password: createNewPassword } : user
      ),
    }));
  },
  increaseCount: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
 

 



});

// Create the store with devtools and persist middleware
const useGlobalStore = create(
  devtools(
    persist(globalStore, {
      name: 'users',
    })
  )
);

export default useGlobalStore;
