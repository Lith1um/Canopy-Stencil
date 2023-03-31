import { Component, h, Prop } from '@stencil/core';
import { TableData } from './types/table-data.type';

@Component({
  tag: 'cpy-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {

  @Prop() tableData: TableData[];

  render() {
    if (!this.tableData?.length) {
      return;
    }

    // get the tableData column names
    const columnHeaders = Object.keys(this.tableData[0])
      .map(columnHeader => columnHeader.replace(/([A-Z])/g, " $1"));

    return (
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              {columnHeaders.map(header => <th>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.tableData.map(row => 
              <tr>
                {Object.values(row).map(cell => <td>{cell.toString() || '--'}</td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}
