import { useEffect, useState } from "react";
import useRobots from "../../hook/useRobots";

const FormCreate = () => {
  const { createRobot } = useRobots();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const initialData = {
    name: "",
    image: "",
    speed: "",
    resistance: "",
    creationDate: "",
  };
  const [robotData, setRobotData] = useState(initialData);

  const changeData = (event) => {
    setRobotData({
      ...robotData,
      [event.target.id]: event.target.value,
    });
  };
  const resetForm = () => {
    setRobotData(initialData);
  };
  useEffect(() => {
    setButtonDisabled(
      robotData.name === "" ||
        robotData.image === "" ||
        robotData.speed === "" ||
        robotData.resistance === "" ||
        robotData.creationDate === ""
    );
  }, [robotData]);

  const onSubmit = (event) => {
    event.preventDefault();
    createRobot(robotData);
    resetForm();
  };

  return (
    <>
      <div className="creation-formulary">
        <h2>Create a new Robot</h2>
        <form onSubmit={onSubmit} autoComplete="off" noValidate>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Enter the name of the Robot"
              type="text"
              value={robotData.name}
              className="form-control"
              id="name"
              onChange={changeData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              placeholder="Enter the link of the image"
              type="text"
              value={robotData.image}
              className="form-control"
              id="image"
              onChange={changeData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="speed">Speed:</label>
            <input
              placeholder="Select the speed"
              type="number"
              min="0"
              max="10"
              value={robotData.speed}
              className="form-control"
              id="speed"
              onChange={changeData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resistance">Resistance:</label>
            <input
              placeholder="Select the resistance"
              type="number"
              min="0"
              max="10"
              value={robotData.resistance}
              className="form-control"
              id="resistance"
              onChange={changeData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="creationDate">Creation date:</label>
            <input
              placeholder="Enter the creation date of the Robot"
              type="text"
              value={robotData.creationDate}
              className="form-control"
              id="creationDate"
              onChange={changeData}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-info"
              disabled={buttonDisabled}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCreate;
