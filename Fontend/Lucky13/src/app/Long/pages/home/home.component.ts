import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public slides = [
    { src: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTEwMzA4OHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { src: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTEwMzA4OHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { src: "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTAzMDg4fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" },
    { src: "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTAzMDg4fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" }
  ];

 

}
