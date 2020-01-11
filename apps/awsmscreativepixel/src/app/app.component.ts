import { Component, HostBinding } from '@angular/core';
import { fade } from './animation/animation';

@Component({
  selector: 'awsworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})

export class AppComponent {
  title = 'awsmscreativepixel';
  loginOutput: any;
  state = 'inactive';
  times = 5;
  counter = 1;

  constructor(){

  }

  ngOnInit(): void {
    this.loginOutput = this.title;
  } 

  getLoginCreds($event) {
    console.log($event);
  }

  onDone($event) {
    // call this function at the end of the previous animation.
    // run it as many time as defined
    if (this.counter) { // < this.times
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }

}
