import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {

  @Prop() data: { [key: string]: string | number | boolean | null | undefined }[];

  render() {
    if (!this.data?.length) {
      return;
    }

    // get the data column names
    const columnHeaders = Object.keys(this.data[0])
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
            {this.data.map(row => 
              <tr>
                {Object.values(row).map(cell => <td>{cell.toString()}</td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}
