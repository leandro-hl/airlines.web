import { HlButton } from "./Button";
import { Table } from "react-bootstrap";

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
        <HlButton onClick={() => ac.onClick(data)} key={i}>
          {ac.desc}
        </HlButton>
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

const buildTable = ({ data, columnsConfig, actions }) => {
  const columns = columnsConfig.map(col => <HlColumn name={col.name} key={col.key} />);

  const rows = data.map((row, i) => (
    <HlRow data={row} columns={columns} actions={actions} key={i} />
  ));

  return <HlTable columns={columns} rows={rows} actions={actions} />;
};

export { HlTable, HlColumn, HlActions, HlRow, buildTable };
