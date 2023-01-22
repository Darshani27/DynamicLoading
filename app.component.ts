import { Component, ComponentFactoryResolver, ComponentRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AdminComponent } from './component/admin/admin.component';
import { CustomerComponent } from './component/customer/customer.component';
import { PlaceHolder } from './PlaceHolder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicloading';
  data='Data from App';
  // @ViewChild('template',{read: ViewContainerRef})
  // viewTemplate!: ViewContainerRef;

  @ViewChild(PlaceHolder,{static:true})
  placeHolder!: PlaceHolder;
  
  public components: any = [
    {
      id:1,
      name:"Customer",
      component: CustomerComponent,
      data: 'This is Customer Component ',
    },
    { 
      id:2,
      name:"Admin",
      component: AdminComponent,
      data: 'This is Admin Component',
    },
  ];
  customerData: any;
  constructor(private cfr:ComponentFactoryResolver)
  {

  }

/*
 Prior to Angular 13
*/
  // loadComponent(): void
  // {
  //   const componentFactory = this.cfr.resolveComponentFactory(HelloComponent);
  //   this.componentRef = this.viewTemplate.createComponent(componentFactory);
  //   this.componentRef.instance.name='SuccessFully';
  // }


  /*
  Angular 13+ 
  dynamic component creation via ViewContainerRef.createComponent does not require
   resolving component factory: component class can be used directly.
  */
  loadComponent(id:any,componentToLoad:Type<any>,data:any): void
  {
    switch(id)
    {
      case 1:
        this.placeHolder.viewContainerRef?.clear();    
        const componentRef=this.placeHolder.viewContainerRef?.createComponent(componentToLoad);
        componentRef.instance.name=data;
        componentRef.instance.data=this.data;
        componentRef.instance.dataToSent.subscribe((res:any)=>{
          if(res!='')
          {
            this.customerData=res;
          }
        });
        break;
      case 2:
        this.placeHolder.viewContainerRef?.clear();    
        const componentRefrence=this.placeHolder.viewContainerRef?.createComponent(componentToLoad);
        componentRefrence.instance.dataFromParent=data;
        break;
    }
  }

  removeComponent(): void
  {
    this.placeHolder.viewContainerRef?.clear();
    this.customerData='';
  }
}

