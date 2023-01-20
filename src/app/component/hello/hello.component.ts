import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  name:string='';
  @Input() data: any;
  @Output() dataToSent=new EventEmitter();
  ngOnInit(): void {
  }
   sendData()
   {
    this.dataToSent.emit('Data from Hello');
   }
}
