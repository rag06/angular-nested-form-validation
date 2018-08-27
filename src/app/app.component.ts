import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Validation App';
  parentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.parentForm = new FormGroup({
    //   loginForm: new FormGroup({
    //     username: new FormControl(null, Validators.required),
    //     password: new FormControl(null, Validators.required)
    //   })
    // });
    this.parentForm = this.fb.group({

    });
  }
  onSubmit() {
    console.log(this.parentForm);
  }

}
