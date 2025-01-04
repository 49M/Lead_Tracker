let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function() {
    console.log('Save Lead');
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = '';
});

function renderLeads() {
    ulEl.innerHTML = '';
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
       // listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>";
       listItems += `
       <li>
         <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
       </li>
       ` 
       // Alternate
        // const li = document.createElement('li');
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}

