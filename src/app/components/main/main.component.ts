import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  result:[];
  favorites:string[]
  isTable:boolean= false;
  isFavor:boolean = false;
     constructor() {
      
    }
  ngOnInit() {}

  findName(value) {
    if(!this.isTable) {
      this.isTable =!this.isTable;
    }
      fetch(`https://api.github.com/search/repositories?q=${value}`)
       .then(res => res.json())
       .then(res => this.result = res.items)       
  }

  addFavorite(key, value) {
    localStorage.setItem(JSON.stringify(key),JSON.stringify(value))
  }  
  
  selectFavorite() {
    let array = [];
    for (let index in localStorage) {
      if (localStorage.getItem(index) != null) {
        array.push(JSON.parse(localStorage.getItem(index)));
      }
    }
    this.favorites =array;    
  }

  isFavorChange(){
    this.selectFavorite(); 
    this.isFavor = ! this.isFavor;
  }
 }
