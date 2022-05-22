import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Output() characterEvent = new EventEmitter<string>();
  character: string;

  constructor() { }

  ngOnInit(): void {
  }

  characterClick(characterSelected: string) {
    this.character = characterSelected;
    this.characterEvent.emit(this.character)
  }
}
