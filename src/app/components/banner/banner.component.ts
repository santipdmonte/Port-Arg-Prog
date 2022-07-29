import { Component, OnInit } from '@angular/core';
import { faGem } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  faGem = faGem;

  constructor() { }

  ngOnInit(): void {
  }

}
