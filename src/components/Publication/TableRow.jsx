const TableRow = ({ publication ,openModal}) => {
  return (
    <tr>
      <th>{publication.id}</th>
      <td>{publication.title}</td>
      <td>{publication.citedBy}</td>
      <td>{publication.year}</td>
      <td className="cursor-pointer underline hover:text-primary" onClick={openModal}>pdf</td>
    </tr>
  );
};

export default TableRow;
