if(localStorage.getItem('selectedBushes') === null) {
    selectedBushes = [];
    saveChanges();
}

const storedArrayString = localStorage.getItem('selectedBushes');

selectedBushes = JSON.parse(storedArrayString);

function getSelectedBushes() {
    return selectedBushes;
}

function eraseSelectedBushes(){
    selectedBushes = [];
    saveChanges();
    this.parent.location.reload();
}

function addToSelectedBushes(bushIndex) {
    bushIndex--;
    if(selectedBushes.indexOf(bushIndex) === -1){
        selectedBushes.push(bushIndex);
    }
    saveChanges();
}

function removeSelectedBushes(bushIndex) {
    bushIndex--;
    temp = selectedBushes.indexOf(bushIndex);
    if(temp !== -1){
        selectedBushes.splice(temp, 1);
    }
    saveChanges();
}

function removeSelectedIndex(arrIndex) {
    selectedBushes.splice(arrIndex, 1);
    saveChanges();
    this.parent.location.reload();
}

function sortSelectedBushes() {
    selectedBushes.sort((a, b) => a - b);
    saveChanges();
    this.parent.location.reload();
}

function saveChanges() {
    const arrayString = JSON.stringify(selectedBushes);
    localStorage.setItem('selectedBushes', arrayString);
}

