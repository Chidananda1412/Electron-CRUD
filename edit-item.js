const { ipcRenderer } = require('electron');

let userIndex;

ipcRenderer.on('edit-user-data', (e,  index, user ) => {
    userIndex = index;
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('country').value = user.country;
});

document.getElementById('editForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const updatedUser = {
        name: document.getElementById('name').value,
        age: parseInt(document.getElementById('age').value),
        country: document.getElementById('country').value
    };

    ipcRenderer.send('save-edited-user',  userIndex, updatedUser );
});
