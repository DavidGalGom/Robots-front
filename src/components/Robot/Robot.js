const Robot = ({ id, name, image, speed, resistance, creationDate }) => {
  return (
    <>
      <ul className="robot-card">
        <li>Robot Name: {name}</li>
        <li>
          <img src={image} alt="Robot" height="200" />
        </li>
        <li>Robot Speed: {speed}</li>
        <li>Robot resistance: {resistance}</li>
        <li>Date of creation: {creationDate}</li>
      </ul>
    </>
  );
};

export default Robot;
