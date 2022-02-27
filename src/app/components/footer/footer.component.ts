import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  companyList: string []=["about us", "careers", "contact us"];

  

  constructor() { }

  ngOnInit(): void {
  }

}
