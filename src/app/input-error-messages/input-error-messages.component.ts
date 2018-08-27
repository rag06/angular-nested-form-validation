import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-error-messages',
  templateUrl: './input-error-messages.component.html',
  styleUrls: ['./input-error-messages.component.css']
})
export class InputErrorMessagesComponent implements OnInit
{
  @Input() formControlObject: FormControl;
  @Input() messageList: any;

  constructor() { }

  ngOnInit() {
    console.log(this.formControlObject);
  }


}
