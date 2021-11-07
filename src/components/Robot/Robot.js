import useRobots from "../../hook/useRobots";
import Button from "../../components/Button/Button";

const Robot = ({ id, name, image, speed, resistance, creationDate }) => {
  const { deleteRobots } = useRobots();

  const onDelete = () => {
    deleteRobots(id);
  };
  return (
    <>
      <ul className="robot-card">
        <div className="robot-container">
          <li>Robot Name: {name}</li>
          <li>
            <img src={image} alt="Robot" height="200" />
          </li>
          <li>Robot Speed: {speed}</li>
          <li>Robot resistance: {resistance}</li>
          <li>Date of creation: {creationDate}</li>
        </div>
        <Button
          value="Delete"
          actionOnClick={onDelete}
          className="red-button btn btn-danger"
        />
      </ul>
    </>
  );
};

export default Robot;
