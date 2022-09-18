// visit : https://medium.com/swlh/es6-mvc-javascript-tutorial-build-a-simple-crud-app-c402f09e69c7
// Model

const contactsData = [
    {
        fname: "Anbu",
        lname: "Arasan",
        phone: "190-309-6101",
        email: "anbu.arasan@email.com",
    },
    {
        fname: "Arivu",
        lname: "Mugilan",
        phone: "490-701-7102",
        email: "arivu.mugilan@email.com",
    },
    {
        fname: "Bob",
        lname: "Johnson",
        phone: "574-909-3948",
        email: "bob.johnson@email.com",
    },
    {
        fname: "Raja",
        lname: "Tamil",
        phone: "090-909-0101",
        email: "raja.tamil@email.com",
    },
    {
        fname: "Sundar",
        lname: "Kannan",
        phone: "090-909-0101",
        email: "sundar.kannan@email.com",
    }
]

// declaring class View

class AddressBookView {
    constructor() {
    }

    init() {
        // console.log("render HTML here");
        this.renderContactListModule()
    }

    renderContactListModule() {
        // get all contacts and assign to contacts
        const contacts = addressBookApp.getContacts()
    
        // cache #contact-list DOM
        const $contactlistUI = document.getElementById('contact-list')
        console.log(document.getElementById("test"));
        // clear HTML from the DOM
        // $contactlistUI.innerText = ''
    
        // for (let i = 0, len = contacts.length; i < len; i++) {
        //     let $li = document.createElement('li')
        //     $li.setAttribute('class', 'contact-list-item')
        //     $li.setAttribute('data-index', i)
        //     $li.innerText = `${contacts[i]['fname']},${contacts[i]['lname']}`
        //     $contactlistUI.append($li)
        // }
    }
}

// declaring class of Controller

class AddressBookCtrl {
    constructor(addressBookView = new AddressBookView) {
        this.addressBookView = addressBookView
    }

    init() {
        this.addressBookView.init()
    }

    getContacts() {
        return contactsData
    }

}

const addressBookApp = new AddressBookCtrl(new AddressBookView)

addressBookApp.init()

