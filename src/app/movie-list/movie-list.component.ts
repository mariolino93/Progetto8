import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  // @Output () cambiaprovaparent = new EventEmitter<string>();
  // @Input ()prova!:string;
  @Input()movielist: Movie[];
  @Output() showmovie = new EventEmitter<any>();
  @Output() editmovie = new EventEmitter<any>();


  filmDetailId: any = null;

  constructor() { }
  viewDetails(id:number){
    this.filmDetailId = id;
    this.showmovie.emit(this.filmDetailId);
  }
  editDetails(id:number){
    this.filmDetailId = id;
    this.editmovie.emit(this.filmDetailId);
  }
  addItem(event:Event){
    console.log(event);
  }
  // cambiaparent(){
  // this.prova = "chiamo dal componente figlio!"
  //this.cambiaprovaparent.emit(this.prova);
  // }
  ngOnInit(): void {
  }
}
