import { v4 as uuid } from "uuid";
import './style.css'

export const TableComponent = ({ columns, columnsFields, data, buttons }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((c) => (
            <th>{c}</th>
          ))}
					{buttons && <th>Opciones</th>}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((d) => (
            <tr key={uuid()}>
              {columnsFields.map((c) => (
                <td>{d[c]}</td>
              ))}
							<td style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}} >
							{buttons && buttons.map((b) => b(d))}
							</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
