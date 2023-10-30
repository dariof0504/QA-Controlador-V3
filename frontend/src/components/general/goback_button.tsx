import { useNavigate } from "react-router-dom";

export const GO_BACK_BUTTON = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <button onClick={() => handleBack()}>Inicio</button>;
};
