import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'awsworkspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  
  @Input() loginInput: any
  @Output() sendLoginCreds = new EventEmitter<any>()

  user = { username: null, password: null }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.loginInput);    
  }
  
  onLoginSubmit(user){
    this.sendLoginCreds.emit(user);
  }

}
