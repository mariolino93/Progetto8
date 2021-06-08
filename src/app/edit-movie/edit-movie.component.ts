import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  @Input() movie: any;
  @Output() movieupdated = new EventEmitter<any>();

  mymovie:any;

  constructor() { }

  update(){
    console.log(this.movie);
    //this.objcopy = this.myobj; //non ho copiato le proprietà, sono lo stesso oggetto
    //this.objcopy.nome = "Carlo"; //si formattano entrambi perché sono lo stesso oggetto, non una copia
    this.movieupdated.emit(this.mymovie);
  }

  resetMovie(){
    this.mymovie = Object.assign({}, this.movie);
  }


  ngOnInit(): void {
    this.resetMovie();
  }

}
