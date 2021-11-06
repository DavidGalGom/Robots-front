import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/thunks";

const useRobots = () => {
  const robots = useSelector((store) => store.robots);
  const dispatch = useDispatch();
  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);
};
