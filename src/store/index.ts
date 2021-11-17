import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { State } from "./types";
import { pokemon } from "@/store/pokemon";

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    initMessage: "Welcome to PokeSearch",
  },
  modules: {
    pokemon,
  },
});

// define your own `useStore` composition function
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  return baseUseStore(key);
}
