import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  banner_heading: string = "Providing high end Engineering services for your Products.";

  constructor() { }

  ngOnInit(): void {
  }

}
