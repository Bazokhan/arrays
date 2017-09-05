// Divs
const btnDiv            = document.getElementById('buttons');
const currentButtonDiv  = document.getElementById('current-button');
const arrDiv            = document.getElementById('original-array');
const toggleBtn         = document.getElementById('toggle');
const resultDiv         = document.getElementById('result');
const returnDiv         = document.getElementById('return');
const mutateDiv         = document.getElementById('mutate');
const newArrDiv         = document.getElementById('new-arr');
const userInputDiv      = document.getElementById('user-input');
const editButtons       = document.getElementsByClassName('user');
const errorDiv          = document.getElementById('error');
const briefDiv          = document.getElementById('brief');
const syntaxDiv         = document.getElementById('syntax');
const showInfoDiv       = document.getElementById('show-info');

// Side List Event Listener
function currentButtonClick(e) {
    currentButtonDiv.innerHTML = '';
    let btn = document.createElement('button');
    btn.appendChild(document.createTextNode(e.target.textContent));
    btn.className = 'mui-btn mui-btn--danger mui-btn--large';
    btn.id = 'main-button';
    btn.setAttribute('onclick',`db.${e.target.getAttribute('data-onclick')}()`);
    currentButtonDiv.appendChild(btn);
    redButtonClick();
    briefDiv.innerHTML = '';
    syntaxDiv.innerHTML = '';
    showInfoDiv.innerHTML = '<span class="small-arrow">More</span>';
    showInfoDiv.onclick = function() {
        if(briefDiv.innerHTML && syntaxDiv.innerHTML) {
            briefDiv.innerHTML = '';
            syntaxDiv.innerHTML = '';
            showInfoDiv.innerHTML = '<span class="small-arrow">More</span>';
        } else {
            briefDiv.innerHTML = briefDb[e.target.getAttribute('data-onclick')];
            syntaxDiv.innerHTML = syntaxDb[e.target.getAttribute('data-onclick')];
            showInfoDiv.innerHTML = '<span class="small-arrow">Less</span>';
        }        
    }
    db.a = originalArray.map(el=>el); // Resetting the database
}
// Red Button Event Listener (Show / Hide List)
toggleBtn.addEventListener('click', redButtonClick);
function redButtonClick() {
    const methods = btnDiv.childNodes;
    for (var i = 1; i < methods.length; i++) {
        methods[i].style.display == 'none' ? methods[i].style.display = 'block' : methods[i].style.display = 'none';
    }     
}



// Create and decorate arrays and results
function renderOriginal(a) {
    userInputDiv.innerHTML = "";
    a.forEach(el=>userInputDiv.innerHTML+=`<span class="arrItem">${el}</span>`);
}
function returnedValue(v) {
    returnDiv.innerHTML += `<span class="arrItem">${v}</span>`
}
function resArray(a) {
    newArrDiv.innerHTML = "";
    a.forEach(el=>newArrDiv.innerHTML+=`<span class="arrItem">${el}</span>`);
}
function logger(funcReturn, a, bool) {
    returnDiv.innerHTML = `This method returns <strong class="underlined">${Array.isArray(funcReturn) ? 'array' : typeof funcReturn}</strong>. In this case it\'s:`;
    returnedValue(funcReturn);
    mutateDiv.innerHTML = `It <span class="${bool ? "red\">mutates" : "green\">doesn't mutate" }</span> the original array. my_Array is now:`;
    resArray(a); 
}



// initialize DOM
// Create side list
buttons.forEach(function(el) {
    let btn = document.createElement('li');
    btn.appendChild(document.createTextNode(el));
    btn.className = 'mui-btn mui-btn--primary';
    btn.setAttribute('data-onclick',el);
    btn.style.display = 'none';
    btn.addEventListener('click', currentButtonClick);
    btnDiv.appendChild(btn);
}, this);
// Set the database
db.a = originalArray.map(el=>el);
renderOriginal(db.a);