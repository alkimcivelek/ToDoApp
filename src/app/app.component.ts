import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  user = 'Alkım Civelek';
  items = [
    {description: 'Kahvaltı', action: 'No'},
    {description: 'Spor', action: 'No'},
    {description: 'Eğitim', action: 'No'},
    {description: 'Kitap Okuma', action: 'No'}
  ];
}
