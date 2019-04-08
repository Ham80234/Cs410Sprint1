import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor() { }
  information: any[] = []
  ngOnInit() {
    this.information.push({
      name: "Arms",
      Children: [
        {
          name : "push-ups",
          amount : ""
      }, 
      {
        name : "pull-ups",
        amount : ""
     }

      ],
      open: false
    })
    this.information.push({
      name: "Legs",
      Children: [
        {
          name : "leg-machine",
          amount : ""
      }, 
      {
        name : "squats",
        amount : ""
     }

      ],
      open: false
    })
    this.information.push({
      name: "Core",
      Children: [
        {
          name : "curl-ups",
          amount : ""
      }, 
      {
        name : "russian twists",
        amount : ""
     }

      ],
      open: false
    })
    this.information.push({
      name: "Cardio",
      Children: [
        {
          name : "running",
          amount : ""
      }, 
      {
        name : "Rowing machine ",
        amount : ""
    
      }
    ],
      open: false
    })
    console.log(this.information)


  }

  ToggleChild(i){
    this.information[i].open = !this.information[i].open 
   
  }

   
  
}
