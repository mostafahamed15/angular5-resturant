import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recepies-details',
  templateUrl: './recepies-details.component.html',
  styleUrls: ['./recepies-details.component.css']
})
export class RecepiesDetailsComponent implements OnInit {
@Input() recipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
