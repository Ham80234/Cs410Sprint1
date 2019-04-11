import { exercise } from './firebase.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
export interface exercise{
  bodyPart: string,
  name: string, 
  suffix: string
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


private exerciseCollection: AngularFirestoreCollection<exercise>
private exercises: Observable<exercise[]>
  constructor(db: AngularFirestore) { 
    this.exerciseCollection = db.collection<exercise>('Excersize');

    this.exercises = this.exerciseCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => { 
          const data = a.payload.doc.data();
          const id =  a.payload.doc.id;
          return { id, ...data};
        });
      })
    )
  }

  getExcersizes(){
    return this.exercises
  }
  getExcersize(id){
    return this.exerciseCollection.doc<exercise>(id).valueChanges();
  }
  updateExcersizes(ex: exercise, id: string){
    return this.exerciseCollection.doc<exercise>(id).update(ex);
  }
  
  addExcersizes(ex: exercise){
    return this.exerciseCollection.add(ex);
  }
  removeExcersizes(id: string){
    return this.exerciseCollection.doc(id).delete();
  }
  
  

  
}

