import { Button, Table } from "react-bootstrap";

const HlTable = ({ columns, rows, actions }: { columns; rows; actions? }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns}
          {actions ? <HlColumn name="Actions" /> : null}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

const HlColumn = ({ name }) => {
  return <th>{name}</th>;
};

const HlActions = ({ data, actions }) => {
  return (
    <td>
      {actions.map((ac, i) => (
        <Button onClick={() => ac.onClick(data)} key={i}>
          {ac.desc}
        </Button>
      ))}
    </td>
  );
};

const HlRow = ({ data, columns, actions }: { data; columns; actions? }) => {
  return (
    <tr>
      {columns.map((col, i) => {
        return <td key={i}>{data[col.key]}</td>;
      })}
      {actions ? <HlActions data={data} actions={actions} /> : null}
    </tr>
  );
};

const buildTable = (data, actions) => {
  const columnNames = Object.keys(data[0]);
  const columns = columnNames.map(name => <HlColumn name={name} key={name} />);

  const rows = data.map((row, i) => (
    <HlRow data={row} columns={columns} actions={actions} key={i} />
  ));

  return <HlTable columns={columns} rows={rows} actions={actions} />;
};

export { HlTable, HlColumn, HlActions, HlRow, buildTable };
