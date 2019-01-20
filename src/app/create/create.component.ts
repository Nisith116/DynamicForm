import { Component, 
  OnInit, 
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory, 
  ViewChild,
  OnDestroy,
  ElementRef,
  Output,
  AfterViewInit,
  Input
} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { ViewComponent } from './view/view.component';
import { RuleService } from './rule.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy,AfterViewInit {
  data:any
  ComponentRef:any
  dynamicData:any[] = []
  myData:any
  counter:number = 1
  closeResult: string

  @Input() name;
  @ViewChild('val') val:ElementRef
  @ViewChild('view',{read:ViewContainerRef}) entry:ViewContainerRef
  @Output() CompData = new EventEmitter()
  @ViewChild('f') f:ElementRef
  @ViewChild('content') content:ElementRef

  constructor(private resolver:ComponentFactoryResolver,private ruleService:RuleService,private modalService: NgbModal) { }

  
  

  ngOnInit() {
  }

  ngAfterViewInit(){
  
  }
  createComponent(){
    this.counter++
    const factory = this.resolver.resolveComponentFactory(ViewComponent)
    this.ComponentRef = this.entry.createComponent(factory)
    this.ComponentRef.instance.allData.subscribe(data=>{
      
      
      
      this.dynamicData.push(data)
   
    })
    // this.ComponentRef.instance.valueData = this.dynamicData
    
    
    }

    

   

  publishData(data){
    
    
    
    console.log(this.counter);
    console.log('dd '+  this.dynamicData.length);
    
    
    if(this.counter == this.dynamicData.length){
      this.ruleService.showData(this.dynamicData)
    }else{
      this.open(this.content)
      
    }
    
  }

  save(data){
    
   
    this.dynamicData.push(data)
    console.log(this.dynamicData);
    
    
  }

  show(data){
    console.log(data);
    
    this.CompData.emit(data)
    
  }

  ngOnDestroy(){
    this.ComponentRef.destroy()
  }

  emitData(data){
    
    this.ruleService.showData(data)
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
 

