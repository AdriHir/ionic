import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButtons, IonButton } from '@ionic/angular/standalone';
import { Dog } from '../Entities';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { DogFormComponent } from "../dog-form/dog-form.component";

@Component({
  selector: 'app-first-dog',
  templateUrl: './first-dog.page.html',
  styleUrls: ['./first-dog.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLinkActive, RouterModule, DogFormComponent]
})
export class FirstDogPage implements OnInit {
  Dog!:Dog[];
  showForm=false;
  constructor() { }


  ngOnInit() {
    this.Dog=[
      { id: 1, name: 'Fidux', firstname: 'lolo',breed: 'pekinoi', birthdate: '20-12-11' },
      { id: 2, name: 'claude', firstname: 'jojo',breed: 'pekinoi', birthdate: '20-12-11' },
      { id: 3, name: 'fred', firstname: 'in-progress',breed: 'pekinoi', birthdate: '20-12-11' },
      { id: 4, name: 'apporter', firstname: 'classe',breed: 'pekinoi', birthdate: '20-12-11' },
    ]
  }
}
