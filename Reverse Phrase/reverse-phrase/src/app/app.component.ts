import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text = '';
  reversedText = '';
  onClickReverse () {
    this.reversedText = this.text.split('').reverse().join('');
    
  }

  onInputText (event: Event) {
    this.text = (event.target as HTMLInputElement).value;
   
  }
}
