
for(let i=0; i<editButtons.length; i++) {
    editButtons[i].addEventListener('click', userEdit);
}

function userEdit(e){
    if(e.target.textContent === 'Edit') {
        e.target.parentElement.children[0].style.display = 'none';
        e.target.parentElement.children[1].style.display = 'block';
        e.target.parentElement.children[2].style.display = 'block';
        userInputDiv.innerHTML = '<input id="inputArr" type="text" placeholder="Insert a valid javascript array. example: [1, \'hi\', {age:35}, false]" />';
        let mainButton = document.getElementById('main-button');
        if(mainButton) mainButton.setAttribute('disabled','');
    } else {
        e.target.parentElement.children[0].style.display = 'block';
        e.target.parentElement.children[1].style.display = 'none';
        e.target.parentElement.children[2].style.display = 'none';
        let mainButton = document.getElementById('main-button');
        if(mainButton) mainButton.removeAttribute('disabled');
        let input = document.getElementById('inputArr');
        let newArr = validateInput(input.value);
        if(Array.isArray(newArr)) {
            errorDiv.innerHTML = '';
            originalArray = newArr;             // Permenantly changing database
            db.a = originalArray.map(el=>el);   // Resetting the database
        } else  errorDiv.innerHTML = '<span class="red">Invalid array! Reverting to previous array.</span>';     
        renderOriginal(db.a);
    }
}

function validateInput(str) {
    let output = [];
    if(str==='') return output;
    else output = eval(str);
    if(Array.isArray(output)) return output;
    else return 'Invalid Array!';
}
