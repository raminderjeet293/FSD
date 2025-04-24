import { Component } from '@angular/core'

@Component({
  selector: 'app-click',
  imports: [],
  templateUrl: './click.component.html',
  styleUrl: './click.component.css'
})
export class ClickComponent {
  cnt:number=0
  increement(){
    this.cnt=this.cnt+1;
  }
  decreement(){
    this.cnt=this.cnt-1;
  }
}
