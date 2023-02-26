import { FoodService } from './../../../service/food.service';
import { Food } from './../../../shared/models/Food';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods!: Food[]

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
    ){

    this.foods = foodService.getAll()
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
