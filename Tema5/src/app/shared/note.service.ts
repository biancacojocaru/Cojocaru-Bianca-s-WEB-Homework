import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  firestoreCollection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) { 
    this.firestoreCollection = firestore.collection('notes');
  }
  addNote(title: string){
    this.firestoreCollection.add({
      title,
      isDone : false
    })
  }

  updateNoteStatus(id:string, newStatus:boolean){
    this.firestoreCollection.doc(id).update({isDone:newStatus});
  }

  deleteNote(id:string){
    this.firestoreCollection.doc(id).delete();
  }

}
