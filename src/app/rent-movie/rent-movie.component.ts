import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-movie',
  templateUrl: './rent-movie.component.html',
  styleUrls: ['./rent-movie.component.css']
})
export class RentMovieComponent implements OnInit {
  title:string = 'Noleggia';

  quantity:number = 0;
  price:number = 6.99;
  price2:number = this.price * 1.22
  discount:number = 20;

  total:number = 0
  total2:number = 0

  constructor() { }
  calculate(q:any){
    let subtotal = q * this.price
    let totaldiscount = (q * this.discount)/100
    this.total = subtotal - totaldiscount
    this.total2 = this.total * 1.22
  }



  ngOnInit(): void {
  }

}
