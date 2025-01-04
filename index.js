let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    renderLeads(myLeads);
    inputEl.value = '';
});

function renderLeads(leads) {
    let listItems = '';
    for (let i = 0; i < leads.length; i++) {
       // listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>";
       listItems += `
       <li>
         <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
       </li>
       ` 
       // Alternate
        // const li = document.createElement('li');
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
});

