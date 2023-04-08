import "./tablerow.css";
const TableRow = (props) => {
  return (
    <tr>
      <td className=" flex justify-center">
        <img src={props.profile} alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.contact}</td>
      <td>{props.aadhaar}</td>
      <td>{props.workerType}</td>
      <td>{props.breakTime}</td>
      <td>{props.extraHr}</td>
      <td>{props.status}</td>
    </tr>
  );
};

export default TableRow;
