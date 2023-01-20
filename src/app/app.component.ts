import { Component, ComponentFactoryResolver, ComponentRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { HelloComponent } from './component/hello/hello.component';
import { PlaceHolder } from './PlaceHolder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicloading';
  componentRef!: ComponentRef<HelloComponent>;
  @ViewChild('template',{read: ViewContainerRef})
  viewTemplate!: ViewContainerRef;

  @ViewChild(PlaceHolder,{static:true})
  alertHost!: PlaceHolder;
  helloData: any;
  // constructor(private cfr:ComponentFactoryResolver)
  // {

  // }

// /*
//  Prior to Angular 13
// */
//   loadComponent(): void
//   {
//     const componentFactory = this.cfr.resolveComponentFactory(HelloComponent);
//     this.componentRef = this.viewTemplate.createComponent(componentFactory);
//     this.componentRef.instance.name='SuccessFully';
//   }


  /*
  Angular 13+ 
  dynamic component creation via ViewContainerRef.createComponent does not require
   resolving component factory: component class can be used directly.
  */
  loadComponent(): void
  {
    this.alertHost.viewContainerRef?.clear();
    const componentRef=this.alertHost.viewContainerRef?.createComponent(HelloComponent);
    componentRef.instance.name='Successfully';
    componentRef.instance.data='Data from App';
    componentRef.instance.dataToSent.subscribe((res:any)=>{
      this.helloData=res;
    })
  }

  removeComponent(): void
  {
    this.alertHost.viewContainerRef?.clear();
    this.helloData='';
  }
}

