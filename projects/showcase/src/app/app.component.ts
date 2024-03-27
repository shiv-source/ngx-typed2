import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'showcase';
  strings1: string[] = ['Typed.js is a JavaScript library.', 'It types out sentences.', 'Try it out!']
  strings2: string[] = ["First sentence.", "Second sentence."]
  strings3:string[] = ["I'm typed.js package", 'Use this with angular'] 
}
