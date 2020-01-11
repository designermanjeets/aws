import { Component, HostBinding } from '@angular/core';
import { fade } from './animation/animation';

export interface Menu {
  name: string;
  route?: string;
}

@Component({
  selector: 'awsworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})

export class AppComponent {
  title = 'awsmscreativepixel';
  loginOutput: any;
  menuItems :Menu[] = [
    { name: 'Home', route: 'home' },
    { name: 'What we do', route: 'whatwedo' },
    { name: 'Who we are', route: 'whoweare' },
    { name: 'Get in touch', route: 'getintouch' },
    { name: 'Login/Signup' },
  ]

  constructor(){

  }

  ngOnInit(): void {
    this.loginOutput = this.title;
  } 

  getLoginCreds($event) {
    console.log($event);
  }

  getClickedItem($event){
    console.log($event);
  }

}
