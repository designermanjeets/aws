import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';

export interface Menu {
  name: string;
  route?: string;
}

@Component({
  selector: 'awsworkspace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() menuItems: Menu[];
  @Output() clickedItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    console.log(this.menuItems);    
  }

  onItemClick(event){
    this.clickedItem.emit(event);
  }

}
