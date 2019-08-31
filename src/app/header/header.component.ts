import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  countryImage = '../../assets/icons/india.svg';
  searchImage = './../assets/icons/ic_search.png';
  constructor() { }

  ngOnInit() {
  }

}
