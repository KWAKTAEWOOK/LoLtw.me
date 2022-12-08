import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "lolState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const langState = atom({
  key: "langState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
