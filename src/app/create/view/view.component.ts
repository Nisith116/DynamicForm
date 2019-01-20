import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data:any;
  flag:boolean = false
  savFlag:boolean = false

  constructor(private ruleService:RuleService) { }
  @Input() valueData
  @Output() value = new EventEmitter()
  @Output() allData = new EventEmitter()
  @Output() flagData = new EventEmitter()
  
  ngOnInit() {

  }

  states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  
  public model: any;
  AllData:any = []

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
    show(val){
      this.data = document.getElementById('val')
      if(val=='saab'){
        this.flag = true
      }else{
        this.flag = false
      }
      
      console.log(val);
      
    }

    // showData(val){
    //  this.ruleService.showData(val)
      
    // }

   

count:number = 0
  add(){
    this.count++
    this.value.emit(this.count)
  }

  addAllData(data){
    this.savFlag = true
    
    this.AllData.push(data)
    this.allData.emit(data)
   
  }
}
