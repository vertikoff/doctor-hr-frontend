import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from '../node_modules/material-ui/Table';


class TableExample extends React.Component {
  constructor() {
    super();

  }

  render() {

    var prettyTableData = [];
    console.log(this.props.tableData);
      for (var i = 0; i < this.props.tableData.length; i++){
        prettyTableData.push(
          <TableRow>
            <TableRowColumn>{this.props.tableData[i][0]}</TableRowColumn>
            <TableRowColumn>{this.props.tableData[i][1]}</TableRowColumn>
            <TableRowColumn>{this.props.tableData[i][2]}</TableRowColumn>
            <TableRowColumn>{this.props.tableData[i][3]}</TableRowColumn>
          </TableRow>
        )
      }

      // prettyTableData.push(
      //      <TableRow>
      //        <TableRowColumn>1</TableRowColumn>
      //        <TableRowColumn>2</TableRowColumn>
      //        <TableRowColumn>3</TableRowColumn>
      //        <TableRowColumn>4</TableRowColumn>
      //      </TableRow>
      //    )



    return (
      <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Age</TableHeaderColumn>
            <TableHeaderColumn>HR</TableHeaderColumn>
            <TableHeaderColumn>Time</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prettyTableData}
        </TableBody>
      </Table>
      </div>
    )

  }
}


export default TableExample;
