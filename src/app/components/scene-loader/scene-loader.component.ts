import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene-loader',
  templateUrl: './scene-loader.component.html',
  styleUrls: ['./scene-loader.component.css']
})
export class SceneLoaderComponent implements OnInit {
  character = "";
  isGundam: boolean;
  isZaku: boolean;
  isUnicorn: boolean;
  showTitle = true;

  constructor() { }

  ngOnInit(): void {
  }

  receiveCharacter(childValue: string) {
    this.character = childValue;
    this.isGundam = this.character === "gundam" ? true : false;
    this.isZaku = this.character === "zaku" ? true : false;
    this.isUnicorn = this.character === "unicorn" ? true : false;
    this.showTitle = false;
  }
}
