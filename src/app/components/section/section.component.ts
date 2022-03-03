import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  banner_heading: string = "Providing High End Engineering Services for Your Products.";

  constructor() { }

  ngOnInit(): void {
  }

}
