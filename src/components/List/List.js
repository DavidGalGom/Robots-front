import { useEffect } from "react";
import useRobots from "../../hook/useRobots";
import Robot from "../Robot/Robot";

const List = () => {
  const { robots, loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <>
      <h2>Robots List</h2>
      <div>
        {robots.map((robot) => (
          <Robot
            id={robot.id}
            key={robot.id}
            name={robot.name}
            image={robot.image}
            speed={robot.speed}
            resistance={robot.resistance}
            creationDate={robot.creationDate}
          ></Robot>
        ))}
      </div>
    </>
  );
};

export default List;
