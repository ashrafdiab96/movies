import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactsForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^(02|002)?01(0|1|2|5)[0-9]{8}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  messageContainer: any[] =[];

  saveDorm() {
    let message = {
      fName: this.contactsForm.controls.firstName.value,
      lName: this.contactsForm.controls.lastName.value,
      phone: this.contactsForm.controls.phone.value,
      email: this.contactsForm.controls.email.value,
      mess: this.contactsForm.controls.message.value
    };
    this.messageContainer.push(message);
    localStorage.setItem('message', JSON.stringify(this.messageContainer));
  }

  constructor() { }

  ngOnInit() {
  }

}
