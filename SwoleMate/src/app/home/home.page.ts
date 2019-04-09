import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular'
import { PopoverPage } from '../popover/popover.page'
import { ProgressPage } from '../progress/progress.page'
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
      cssClass: 'contact-popover'
      
    })
    popover.present()
    const  data = await popover.onWillDismiss();
    this.addWorkout(data)
  }

  async ProgressopenPopover(ev: Event){
    const popover = await this.popoverController.create({
      component: ProgressPage,
      componentProps: {
        custom_id: this.value
      },
      cssClass: 'contact-popover'
      
    })
    popover.present()
   
  }

 addWorkout(Name){
  
  this.workout.push({
    name:  Name.data.name,
    amount:  Name.data.amount,
    suffix:  Name.data.suffix
  })
 }
}
