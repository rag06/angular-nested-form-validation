import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormGroupDirective, ControlContainer, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }]
})
export class LoginFormComponent implements  OnInit  {
  public loginForm: FormGroup;
  public errorMessageList;
  constructor( private _parentForm: FormGroupDirective, private fb: FormBuilder) {
    this.loginForm =  this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['1', [Validators.required]]
    });
    this.errorMessageList = {
      username: { required:"Field is blank" , minlength:"Name Min length Failed"},
      password: {required:"Field is Important", minlength:"PassMin length Failed"},
    };
  }

  ngOnInit() {
    this._parentForm.form.addControl(
      'loginForm', this.loginForm
    );
  }




}
