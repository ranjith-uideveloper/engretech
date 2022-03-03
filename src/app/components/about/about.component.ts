import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about_bannerText:string = "Cost-Effective Solutions will help you save on your product development and manufacturing costs.";

  constructor() { }

  ngOnInit(): void {
  }

}
