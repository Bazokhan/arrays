
for(let i=0; i<editButtons.length; i++) {
    editButtons[i].addEventListener('click', userEdit);
}

function userEdit(e){
    if(e.target.textContent === 'Edit') {
        //1. Hide edit button and show save / cancel buttons
        e.target.parentElement.children[0].style.display = 'none';
        e.target.parentElement.children[1].style.display = 'block';
        e.target.parentElement.children[2].style.display = 'block';
        //2. Disable the current main button while editing the array
        let mainButton = document.getElementById('main-button');
        if(mainButton) mainButton.setAttribute('disabled','');
        //3. Create input field for the user
        userInputDiv.innerHTML = '<input id="inputArr" type="text" placeholder="Insert a valid javascript array. example: [1, \'hi\', {age:35}, false]" />';
    } else {
        //1. Hide save / cancel buttons and show edit button
        e.target.parentElement.children[0].style.display = 'block';
        e.target.parentElement.children[1].style.display = 'none';
        e.target.parentElement.children[2].style.display = 'none';
        //2. Re-enable the current main button
        let mainButton = document.getElementById('main-button');
        if(mainButton) mainButton.removeAttribute('disabled');
        //3. Save..
        if(e.target.textContent === 'Save') {
            let input = document.getElementById('inputArr');
            let newArr = validateInput(input.value);
            if(Array.isArray(newArr)) {
                originalArray = newArr;             // Permenantly changing database
                db.a = originalArray.map(el=>el);   // Resetting the database
            } else  {
                errorDiv.innerHTML = '<span class="red">Invalid array! Reverting to previous array.</span>';
                setTimeout(()=>errorDiv.innerHTML = '', 2000);
            }
            renderOriginal(db.a);
        } else renderOriginal(db.a); //3. or Cancel !
    }
}

function validateInput(str) {
    let output = [];
    output = eval(str);
    if(Array.isArray(output)) return output;
    else return 'Invalid Array!';
}
