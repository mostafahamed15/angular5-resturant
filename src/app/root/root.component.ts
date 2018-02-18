import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();
onSelect(feature: string){
  this.featureSelected.emit(feature);
}
  constructor() { }

  ngOnInit() {
  }

}
