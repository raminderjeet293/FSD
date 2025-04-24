import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
 err:string=''
  logobj:any={
  uname:'',
  mail:''
}
Submitform(event:Event){
  event.preventDefault();

  if(this.logobj.uname==' ')
  {
    this.err="Cant be blank"
  }
  else{
   console.log('Form submitted')
   this.err=' '
  }
  alert("yes,it is working + this.logobj.uname")
}
}
