import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent, HeaderComponent],
  template: `
    <app-header />
    <app-form />


  `,
  styles: [],
})
export class AppComponent {
  title = 'munimji';
}
