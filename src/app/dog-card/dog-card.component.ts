import { Component, input, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from "@ionic/angular/standalone";
import { Dog } from '../Entities';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, DatePipe]
})
export class DogCardComponent  implements OnInit {
  @Input({required:true})
  dog!:Dog;
  
  @Input()
  isSelected = false;

  constructor() { }

  ngOnInit() {}

}
import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from "@ionic/angular/standalone";
import { Dog } from '../Entities';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, DatePipe]
})
export class DogCardComponent  implements OnInit {
  @Input({required:true})
  dog!:Dog;

  constructor() { }

  ngOnInit() {}

}