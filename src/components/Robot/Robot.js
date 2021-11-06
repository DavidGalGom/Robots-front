const Robot = ({ id, name, image, speed, resistance, creationDate }) => {
  return (
    <>
      <ul>
        <li>Robot Name: {name}</li>
        <li>{image}</li>
        <li>Robot Speed: {speed}</li>
        <li>Robot resistance: {resistance}</li>
        <li>Date of creation: {creationDate}</li>
      </ul>
    </>
  );
};

export default Robot;
