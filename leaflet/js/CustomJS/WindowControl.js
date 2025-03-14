let collapsed = false;


function changeWidth()
{
    if(collapsed) {
        openDataView();
    }
    else {
        closeDataView();
    }
}

// Function to expand the data view
function openDataView()
{
        leftPercent = '60%'
        document.getElementById('left').style.width = leftPercent;
        document.getElementById('collapseContainer').style.left = leftPercent;
        document.getElementById('right').style.width = '38%';
        document.getElementById('collapseButton').innerHTML = ">";
        collapsed = false;
}

// Function to collapse the data view
function closeDataView()
{
        leftPercent = '98%'
        document.getElementById('left').style.width = leftPercent;
        document.getElementById('collapseContainer').style.left = leftPercent;
        document.getElementById('right').style.width = '0';
        document.getElementById('collapseButton').innerHTML = "<";
        collapsed = true;
}
