import { contactsArr } from "./contactsData.mjs";

// declaration of some dom elements
const patternSearchInput = document.getElementById('pattern-search-input');
const patternSearchSubmit = document.getElementById('pattern-search-submit');
const contactDisplay = document.getElementById('contact-display');

// declare an event on the submit button
patternSearchSubmit.addEventListener('click', function() {
    findMatchingPattern(contactsArr, patternSearchInput.value)
})

// function for finding pattern that match a particular name
function findMatchingPattern(contactsArr, pattern) {
    contactDisplay.innerText = '';
    const regex = new RegExp(pattern, 'i');
    contactsArr.filter(contact => regex.test(contact.name))
               .forEach(contact => renderContact(contact))
}

// function to render contact
function renderContact(contact) {
    const { name, email, phone } = contact;
    const contactCard = document.createElement('aside');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('p');
    const phoneElem = document.createElement('p');
    nameElem.innerText = name;
    emailElem.innerText = email;
    phoneElem.innerText = phone;
    contactCard.appendChild(nameElem);
    contactCard.appendChild(emailElem);
    contactCard.appendChild(phoneElem);
    contactDisplay.appendChild(contactCard)
}