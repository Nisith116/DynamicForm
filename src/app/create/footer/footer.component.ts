import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Output() value = new EventEmitter()
  @Output() viewData = new EventEmitter()



  ngOnInit() {
  }
count:number = 0
  add(){
    this.count++
    this.value.emit(this.count)
  }

  addAllData(){
    this.viewData.emit()
  }

}
