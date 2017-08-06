import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
    // , private db: AngularFireDatabase
    ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    });
  }

  onSubmit() {
    // const {name, email, message} = this.form.value;
    // const date = Date();
    // const html = `
    //   <div>From: ${name}</div>
    //   <div>Email: <a href="mailto:${email}">${email}</a></div>
    //   <div>Date: ${date}</div>
    //   <div>Message: ${message}</div>
    // `;
    // let formRequest = { name, email, message, date, html };
    // this.db.list('/messages').push(formRequest);
    // this.form.reset();
  }

  ngOnInit() {
  }

}
