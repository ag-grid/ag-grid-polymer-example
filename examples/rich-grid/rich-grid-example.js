

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
    addQuickFilterListener();
    addRefreshDataViaApi();
    addRefreshDataViaElement();
    addDestroyListener();
});
