import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {
 @Input() recipe: Recipe;
 
  constructor() { }

  ngOnInit() {
  }

}
