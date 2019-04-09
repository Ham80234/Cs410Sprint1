import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }
  information: any[] = []
  ngOnInit() {
    this.information.push({
      name: "Arms",
      Children: [
        {
          name : "push-ups",
          amount: 15,
          suffix: "sets"

      }, 
      {
        name : "pull-ups",
        amount: 10,
        suffix: "sets"
     }

      ],
      open: false
    })
    this.information.push({
      name: "Legs",
      Children: [
        {
          name : "leg-machine",
          amount: 30,
          suffix: "sets"

      }, 
      {
        name : "squats",
        amount: 20,
        suffix: "sets"
     }

      ],
      open: false
    })
    this.information.push({
      name: "Core",
      Children: [
        {
          name : "curl-ups",
          amount: 15,
          suffix: "sets"

      }, 
      {
        name : "russian twists",
        amount: 15,
        suffix: "sets"
     }

      ],
      open: false
    })
    this.information.push({
      name: "Cardio",
      Children: [
        {
          name : "running",
          amount: 1,
          suffix: "miles"

      }, 
      {
        name : "Rowing machine ",
        amount: 1,
        suffix: "miles"
      }
    ],
      open: false
    })
    console.log(this.information)


  }

  ToggleChild(i){
    this.information[i].open = !this.information[i].open 
   
  }
  dismiss(i , j){
    console.log(this.information[i].Children[j])
    this.popoverController.dismiss(this.information[i].Children[j]);
  }
   
  
}
