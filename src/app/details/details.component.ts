import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestApiService} from '../shared/rest-api.service';
import { Drinks } from '../shared/models/drinks';
import { Cocktail } from '../shared/models/cocktails';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  cocktailId = this.router.snapshot.params['cocktail-id'];
  cockDetails:Cocktail;

  constructor(
    public router: ActivatedRoute,
    public restApi: RestApiService,
  ) {
  }

  ngOnInit() {
     return this.restApi.getCocktailDetails(this.cocktailId).subscribe((data:Drinks) => {
       this.cockDetails = data.drinks[0];
     });
  }
}
