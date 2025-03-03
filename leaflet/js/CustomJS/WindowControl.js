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
        document.getElementById('left').style.width = '60%';
        document.getElementById('right').style.width = '40%';
        document.getElementById('collapseButton').style.width = '5%';
        document.getElementById('infoDisp').style.width = '100%';
        document.getElementById('collapseButton').innerHTML = ">";
        collapsed = false;
}

// Function to collapse the data view
function closeDataView()
{
        document.getElementById('left').style.width = '98%';
        document.getElementById('right').style.width = '2%';
        document.getElementById('collapseButton').style.width = '100%';
        document.getElementById('infoDisp').style.width = '0%';
        document.getElementById('collapseButton').innerHTML = "<";
        collapsed = true;
}
