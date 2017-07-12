

function addDestroyListener() {
    const btDestroyGrid = document.querySelector('#btDestroyGrid');
    btDestroyGrid.addEventListener('click', function () {
        gridOptions.api.destroy();
        btDestroyGrid.disabled = true;
    });
}

function addQuickFilterListener() {
    const eInput = document.querySelector('#quickFilterInput');
    eInput.addEventListener("input", function () {
        const text = eInput.value;
        gridOptions.api.setQuickFilter(text);
    });
}

function addRefreshDataViaApi() {
    const eButton = document.querySelector('#btRefreshDataViaApi');
    eButton.addEventListener("click", function () {
        const data = createRowData();
        gridOptions.api.setRowData(data);
    });
}

function addRefreshDataViaElement() {
    const eButton = document.querySelector('#btRefreshDataViaElement');
    eButton.addEventListener("click", function () {
        const myGrid = document.querySelector('#myGrid');
        myGrid.rowData = createRowData();
    });
}


// wait for the document to be loaded, otherwise
// ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function () {

    const myGrid = document.querySelector('#myGrid');
    myGrid.gridOptions = gridOptions;

    // add events to grid option 1 - add an event listener
    myGrid.addEventListener('columnresized', function (event) {
        console.log('event via option 1: ' + event.agGridDetails);
    });

    // add events to grid option 2 - callback on the element
    myGrid.oncolumnresized = function (event) {
        console.log('event via option 2: ' + event.agGridDetails);
    };

    // add events to grid option 3 - callback on the grid options
    gridOptions.onColumnResized = function (event) {
        console.log('event via option 3: ' + event);
    };

    addQuickFilterListener();
    addRefreshDataViaApi();
    addRefreshDataViaElement();
    addDestroyListener();
});
