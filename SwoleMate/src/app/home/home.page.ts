import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular'
import { PopoverPage } from '../popover/popover.page'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value = 0
  workout: any[] =[]
  constructor(public popoverController: PopoverController){

  }

 async openPopover(ev: Event){
   const popover = await this.popoverController.create({
     component: PopoverPage,
     componentProps: {
       custom_id: this.value
     },
     
   })
   popover.present()
 }

 addWorkout(Name, amount){
  this.workout.push({
    name: Name,
    amount: amount
  })
 }
}
