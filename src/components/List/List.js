import { useEffect } from "react";
import useRobots from "../../hook/useRobots";
import Robot from "../Robot/Robot";

const List = () => {
  const { robot, loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return robot ? (
    <>
      <h2>Robots List</h2>
      <div>
        {robot.map((robot) => (
          <Robot
            _id={robot._id}
            key={robot._id}
            name={robot.name}
            image={robot.image}
            speed={robot.speed}
            resistance={robot.resistance}
            creationDate={robot.creationDate}
          ></Robot>
        ))}
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default List;
