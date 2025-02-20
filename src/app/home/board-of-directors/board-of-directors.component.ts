import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import boardOfDirectorsJsonData from 'src/app/constants/board-of-directors.json'

@Component({
  selector: 'app-board-of-directors',
  templateUrl: './board-of-directors.component.html',
  styleUrls: ['./board-of-directors.component.css']
})
export class BoardOfDirectorsComponent implements OnInit {

  data :Array<any> = [];
loading:any;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loading=true;
    setTimeout(() => {
      this.loading = false;
  }, 1000);
    this.data = boardOfDirectorsJsonData;

    // console.log("boardOfDirectorsJsonData : ",this.data);
    
  }

  goToNextChapter(){
    this.router.navigate(['/financial-highlights']);
  }

}
