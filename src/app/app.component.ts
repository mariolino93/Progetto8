import { Component, OnInit } from '@angular/core';
import {Movie} from './movie';
import {MOVIES} from './mock-movies';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Film';
  selected = 'list';
  movies: Array<Movie> = MOVIES;
  selectedmovie:any;
  lastId:any;
  //prova:string = 'Sono un component padre'
  cambia(type) {
    this.selected = type
  }
  constructor(){}

  updateMovie(movie:any){
    console.log(movie);
    let x = this.movies.findIndex(value =>value.id === movie.id)
    console.log (x);
    for(let prop in movie){
      this.movies[x][prop] = movie[prop];
    }
  }

  viewDetails(movieId:any){
    console.log(movieId);
    this.selectedmovie = this.movies.find((value)=>{
      return value.id === movieId;
    })
    this.selected = 'detail';
    console.log(this.selectedmovie.title);
  }
  editDetails(movieId:any){
    console.log(movieId);
    this.selectedmovie = this.movies.find((value)=>{
      return value.id === movieId;
    })
    this.selected = 'edit';
    console.log(this.selectedmovie.title);
  }
  addFilm(myfilm:any){
    myfilm.image = '/assets/images/' + myfilm.image;
    this.movies.push(myfilm);
    this.selected = 'list';
    this.lastId = Math.max(...this.movies.map((val) => val.id));

  }

  // cambiaparent(e:string){
  //  this.prova = e;
  // }
  showcontent(type:string):void {
    this.selected = type;
  }

  ngOnInit(){
    let myarray = this.movies.map((val) => val.id);
    let nuovoarray = [...this.movies]
    let mynewobj = {...this.movies[0]}
    console.log(mynewobj);
    this.lastId = Math.max(...this.movies.map((val) => val.id));

  }
}
