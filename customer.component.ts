import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit,OnDestroy {

  constructor() { }
  

  name:string='';
  @Input() data: any;
  @Output() dataToSent=new EventEmitter();
  ngOnInit(): void {
  }
  sendData()
  {
   this.dataToSent.emit('Data from Customer');
  }
  ngOnDestroy(): void {
    this.dataToSent.emit(null);
  }

}
