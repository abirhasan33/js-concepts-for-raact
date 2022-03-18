const addToLocalStorege = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const idValue = document.getElementById('storage-value');
    const value = idValue.value;
    // 
    localStorage.setItem(id, value);
    idInput.value = '';
    idValue.value = '';
}
