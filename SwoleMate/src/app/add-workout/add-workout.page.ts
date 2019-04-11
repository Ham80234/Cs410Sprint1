import { exercise, FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular'


@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.page.html',
  styleUrls: ['./add-workout.page.scss'],
})
export class AddWorkoutPage implements OnInit {

  newElem: exercise = {
    bodyPart: "Test",
    name: "string", 
    suffix: "string"
  }

  id =  null

  constructor(private dbservice: FirebaseService, private route: ActivatedRoute, public loadingController: LoadingController,
  private nav: NavController) { }

  ngOnInit() {
    this.id  =  this.route.snapshot.params['id'];

    if(this.id){
      this.loadWorkout();
    }
  }

  async loadWorkout(){
    const loading  = await this.loadingController.create({
      
    })
    await loading.present()


    this.dbservice.getExcersize(this.id).subscribe(res =>{
      loading.dismiss();
      this.newElem = res
    })
  }

  async saveWorkout(){
    const saving  = await this.loadingController.create({
      
    })
    await saving.present()

    if(this.id){
      this.dbservice.updateExcersizes(this.newElem, this.id).then(()=>{
        saving.dismiss()
        this.nav.back()
      });
    }else{
      this.dbservice.addExcersizes(this.newElem).then(()=>{
        saving.dismiss()
        this.nav.back()
      });
    }
  }
}
