import { useNavigate, useParams } from "react-router-dom";
import { deleteElement } from "../../api/axios";

export const DELETE_PAGE = () => {
  const { path, pk } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = await deleteElement(path as string, pk as string);

    result && navigate(-1);
  };

  return (
    <div className="formElement" >
      <p>Estas seguro de eliminar el elemento</p>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
      <button onClick={() => handleDelete()}>Eliminar</button>
      <button onClick={() => navigate(-1)}>Cancelar</button>
      </div>
    </div>
  );
};
