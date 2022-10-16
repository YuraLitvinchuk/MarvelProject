import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <img
      style={{
        display: "bock",
        width: "250px",
        height: "250px",
        objectFit: "contaon",
        margin: "0 auto",
      }}
      src={img}
      alt="Error"
    />
  );
};

export default ErrorMessage;
