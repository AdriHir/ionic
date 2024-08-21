import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Dog } from '../Entities';
import { CommonModule } from '@angular/common';
import { IonInput, IonDatetime, IonDatetimeButton, IonModal, IonCardHeader, IonCardTitle, IonCardSubtitle, IonApp, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { FirstDogPage } from '../first-dog/first-dog.page';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss'],
  standalone: true,
  imports: [IonButton, IonApp, IonCardSubtitle, IonCardTitle, IonCardHeader, IonModal, IonDatetimeButton, IonDatetime, IonInput, CommonModule,FormsModule,FirstDogPage]
})
export class DogFormComponent  implements OnInit {
  @Input()
  toEdit!:Dog;

  @Output()
  apply= new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
