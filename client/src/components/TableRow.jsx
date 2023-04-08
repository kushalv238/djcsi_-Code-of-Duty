import "./tablerow.css";
const TableRow = (props) => {
  return (
    <tr>
      <td>{props._id}</td>
      <td>
        <img src={props.profile} alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.contact}</td>
      <td>
        <span className="badge success">Available</span>
      </td>
    </tr>
  );
};

export default TableRow;
