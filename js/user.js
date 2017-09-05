
for(let i=0; i<editButtons.length; i++) {
    editButtons[i].addEventListener('click', userEdit);
}

function userEdit(e){
    if(e.target.textContent === 'Edit') {
        e.target.parentElement.children[0].style.display = 'none';
        e.target.parentElement.children[1].style.display = 'block';
        e.target.parentElement.children[2].style.display = 'block';
        userInputDiv.innerHTML = '<input id="inputArr" type="text" placeholder="Insert an array of elements separated by commas (,)" />';
        let mainButton = document.getElementById('main-button');
        if(mainButton) mainButton.setAttribute('disabled','');
    } else {
        e.target.parentElement.children[0].style.display = 'block';
        e.target.parentElement.children[1].style.display = 'none';
        e.target.parentElement.children[2].style.display = 'none';
        let mainButton = document.getElementById('main-button');
        if(mainButton) mainButton.removeAttribute('disabled');
        let input = document.getElementById('inputArr');
        let newArr = input.value.split(',');
        originalArray = newArr.map(el=>parseInt(el));   // Permenantly changing database
        db.a = originalArray.map(el=>el);               // Resetting the database
        renderOriginal(newArr);
        validateInput(input.value);
    }
}

function validateInput(str) {
    let output = [];
    if(str==='') return output;
    else {
    
    }
}
