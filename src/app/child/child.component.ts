import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() child_data = '';
  ngOnInit(): void {
  }
  parentinput=''
  @Output() messageToEMit = new EventEmitter();

  send_data_to_parent(){
    this.messageToEMit.emit(this.parentinput);
    // console.log('test')
  }

}
