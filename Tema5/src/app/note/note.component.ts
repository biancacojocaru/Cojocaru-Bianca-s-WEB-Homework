import { Component, OnInit } from '@angular/core';
import { NoteService } from '../shared/note.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: 'note.component.css',
  styles: ``,
})
export class NoteComponent implements OnInit {

  notes: any[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.firestoreCollection.valueChanges({idField:'id'})
    .subscribe(item=>{
      this.notes = item.sort((a:any, b:any) => 
      {return a.isDone - b.isDone});
    })
  }

  onClick(titleInput: HTMLInputElement) {
    if (titleInput.value) {
      this.noteService.addNote(titleInput.value);
      titleInput.value = "";
    }
  }

  onStatusChange(id:string, newStatus:boolean) {
    this.noteService.updateNoteStatus(id, newStatus);
  }

  onDelete(id:string){
    this.noteService.deleteNote(id);
  }

}


