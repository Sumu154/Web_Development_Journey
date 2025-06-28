import { useDispatch, useSelector } from "react-redux";
import type { appDispatch, rootState } from "./store";

export const useAppSelector = useSelector.withTypes<rootState>()
export const useAppDispatch = useDispatch.withTypes<appDispatch>()
