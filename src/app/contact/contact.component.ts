import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formGroup = new FormGroup({
    fcName:new FormControl(""),
    fcemail:new FormControl(""),
    fcMessage:new FormControl("")})
 
send(){
  alert('Submitted successfully');
  this.formGroup.controls['fcName'].setValue("")
  this.formGroup.controls['fcemail'].setValue("")
  this.formGroup.controls['fcMessage'].setValue("")
}
}
