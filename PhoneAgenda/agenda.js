const prompt = require("prompt-sync")()
const Contacts = []

function createContact(){
    let newUserName = null
    let newUserPhone = null
    do {
        newUserName = prompt("Name: ")
        if (!newUserName){
            return "Please enter a valid name"
        } 
    } while (!newUserName)
    do {
        newUserPhone = prompt("Number: ")
        if(!newUserPhone){
            return "Use a valid number"
        }
    } while(!newUserPhone)
    let newContact = {
        name : newUserName,
        phone: newUserPhone
    }
    Contacts.push(newContact)
    return Contacts
}


function listContacts(){
    let listContacts = JSON.stringify(Contacts, null, 2)
    return listContacts
}

function deleteContact(){
    let searchedName = null
    do {
        searchedName = prompt("User to delete: ")
    } while(!searchedName)
    let searchedResult = Contacts.findIndex(function(contact) { return contact.name.toLowerCase() === searchedName.toLocaleLowerCase()})
    if (searchedResult === undefined){
        console.log(`${searchedName} does not exist`)
    } else{
        if (searchedResult >= 0 && searchedResult < Contacts.length){
            Contacts.splice(searchedResult, 1)
            console.log(`${searchedName} was deleted`)
        } else {
            console.log("Invalid index")
        }
    }
}


function updateUser(){
    let _a, _b
    let searchedName = null
    do {
        searchedName = prompt("Search by name: ")
    } while(!searchedName)
        let searchedResult = contacts.findIndex(function (contact) { return contact.nombre.toLowerCase() === searchedName.toLowerCase(); })
        if (searchedResult === undefined) {
            console.log(searchedName + ' does not exist')
        }
        else {
            let newName = null
            let newPhone = null
            do {
                newName = prompt('New Name', ((_a = contacts[searchedResult]) === null || _a === void 0 ? void 0 : _a.nombre) || '')
                Contacts[searchedResult].name = newName;
            } while (newName === null)
            do {
                newPhone = prompt('New Phone', ((_b = Contacts[searchedResult]) === null || _b === void 0 ? void 0 : _b.phone.toString()) || '')
                Contacts[searchedResult].phone = parseInt(newPhone);
            } while (newPhone === null)
            console.log(searchedName + ' was updated to ' + newName)
        }
}



function searchUser(){
    let searchedName = null
    do {
        searchedName = prompt("Search by name: ")
    } while(!searchedName)
    let searchedResult = Contacts.find(function(contact) { return contact.name.toLowerCase() === searchedName.toLocaleLowerCase()})
    if (searchedResult === undefined){
        console.log(`${searchedName} does not exist`)
    } else {
        console.log(JSON.stringify(searchedResult, null, 2))
    }
}


function App() {
    let option = ''
    let menu = 'Menu: \n 1 .Add new contact\n 2. Search Contact\n 3. Update Contact\n 4. Delete Contact\n 5. List Contacts\n 6. Exit\n'
    while(option !== '6'){
        option = prompt(menu)
        switch (option){
            case '1':
                createContact()
                break
            case '2':
                searchUser()
                break
            case '3':
                updateUser()
                break
            case '4':
                deleteContact()
                break
            case '5':
                listContacts()
                break
            case '6':
                break
            default:
                console.log("Invalid option")
                break    
        }
    }
}

App()