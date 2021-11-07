import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunk, createRobotThunk } from "../redux/thunks/thunks";

const useRobots = () => {
  const robots = useSelector((store) => store.robots);
  const dispatch = useDispatch();
  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const createRobot = useCallback(
    (robot) => {
      dispatch(createRobotThunk(robot));
    },
    [dispatch]
  );

  return {
    robots,
    loadRobots,
    createRobot,
  };
};

export default useRobots;
