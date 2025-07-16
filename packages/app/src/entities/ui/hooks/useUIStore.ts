import { useStore } from "@hanghae-plus/lib";
import { uiStore } from "../uiStore";

export const useUIStore = () => useStore(uiStore);
