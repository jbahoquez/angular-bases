import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id:'dssssd',
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDeleteId: EventEmitter<string>=new EventEmitter();
  // onDeleteId():void{

  // }

  onDeleteCharacter(id?:string):void{
    //TODO: emitir el Id del personaje
    if (!id) return;
    this.onDeleteId.emit(id);
    // console.log(id);
  }
}
