import { exercise, FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular'
import { PopoverPage } from '../popover/popover.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  value = 0
  workout: exercise[]
  constructor(public popoverController: PopoverController, private dbService: FirebaseService){

  }
  ngOnInit(){
    this.dbService.getExcersizes().subscribe(res =>{
      this.workout = res;
    })
  }

  Remove(item){
    this.dbService.removeExcersizes(item)
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
    
  }


 
}
