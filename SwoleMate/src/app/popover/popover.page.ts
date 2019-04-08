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
      Children: ["Push Ups", "Dumb Bells "],
      open: false
    })
    this.information.push({
      name: "Legs",
      Children: ["Leg machine", "Squats"],
      open: false
    })
    this.information.push({
      name: "Core",
      Children: ["Curl Ups", "Russian Twists "],
      open: false
    })
    this.information.push({
      name: "Cardio",
      Children: ["Running", "Rowing machine"],
      open: false
    })
    console.log(this.information)


  }

  ToggleChild(i){
    this.information[i].open = !this.information[i].open 
   
  }

   
  
}
