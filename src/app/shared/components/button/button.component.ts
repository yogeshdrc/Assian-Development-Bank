import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() data:any;
  @Input() title:any;


  constructor() { }

  ngOnInit(): void {
    // console.log("this.button : ",this.title);
    
  }

}
