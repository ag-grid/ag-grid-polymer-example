import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@ag-community/grid-polymer';
import "@ag-community/client-side-row-model";

import ClickableCellRenderer from './clickable-renderer'

class AgGridPolymerExample extends PolymerElement {
    static get template() {
        return html`
            <link rel="stylesheet" href="../node_modules/@ag-community/grid-core/dist/styles/ag-grid.css">
            <link rel="stylesheet" href="../node_modules/@ag-community/grid-core/dist/styles/ag-theme-balham.css">
          
            <div style="width: 800px;">
                <h1>Simple ag-Grid Polymer 3 Example</h1>
                <ag-grid-polymer style="width: 100%; height: 350px;"
                                 class="ag-theme-balham"
                                 rowData="{{rowData}}"
                                 columnDefs="{{columnDefs}}"
                                 components="{{components}}"
                                 on-first-data-rendered="{{firstDataRendered}}"
                                 ></ag-grid-polymer>
            </div>
    `;
    }

    constructor() {
        super();

        this.columnDefs = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"},
            {
                headerName: "Clickable Component",
                field: "make",
                cellRendererFramework: 'clickable-renderer'
            }
        ];

        this.rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ];

        this.components = {
            clickableCellRenderer: ClickableCellRenderer,
        }
    }

    firstDataRendered(params) {
        params.api.sizeColumnsToFit()
    }
}

customElements.define('ag-grid-polymer-example', AgGridPolymerExample);
