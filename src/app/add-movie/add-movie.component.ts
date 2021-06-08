import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Movie} from '../movie';
import {MOVIES} from '../mock-movies';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Output()movieadd = new EventEmitter<any>();
  @Input()
  lastId:any;
  newmovie:any;


  constructor() { }

  addNewFilm(value:any){
    console.log('Funzionaaaaaa');
    this.newmovie.id++
    this.movieadd.emit(value)

  }

  ngOnInit(): void {
    this.newmovie = {
      id : this.lastId + 1,
      title: '',
      image: '',
      plot: '',
      categories: [],
      cast: ''

    }
  }

}
