import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ontoggle(){
    const toggle = document.getElementById('toggle');
    const sidebar = document.getElementById('sidebar');
    document.onclick = function(e){
      if((e.target as Element).id !== 'sidebar' && (e.target as Element).id !== 'toggle'){
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
      }
    }
    toggle.onclick = function(){
      toggle.classList.toggle('active');
      sidebar.classList.toggle('active');
    }
  }
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.ontoggle();
  }

}
