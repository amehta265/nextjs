import create from 'zustand'

export const useStore = create((set) => ({
  isLoading: false,
  setIsLoading: (data) => set({ isLoading: data }),
}))