import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickComponent } from './click/click.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ClickComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mca';
}
