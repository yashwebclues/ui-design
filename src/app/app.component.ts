import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  signUpForm: FormGroup;

  // We are passing an instance of the FormBuilder to our constructor
  constructor(fb: FormBuilder) {

    this.signUpForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'firstName':[null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'confirmPassword': [null, Validators.required],
      'companyName': [null, Validators.required],
      'terms': [null, Validators.required]
    })
  }
}
