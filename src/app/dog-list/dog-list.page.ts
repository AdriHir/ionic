import { Component, OnInit,ViewChild,viewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonButton, IonButtons, IonIcon, IonFabButton, IonFab, IonItem, IonModal } from '@ionic/angular/standalone';
import { Dog } from '../Entities';
import { DogServiceService } from '../dog-service.service';
import { Route, Router } from '@angular/router';
import { DogCardComponent } from "../dog-card/dog-card.component";
import {OverlayEventDetail} from "@ionic/core/components"
import { DogFormComponent } from "../dog-form/dog-form.component";

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.page.html',
  styleUrls: ['./dog-list.page.scss'],
  standalone: true,
  imports: [IonModal, IonItem, IonFab, IonFabButton, IonIcon, IonButtons, IonButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, DogCardComponent, DogFormComponent]
})
export class DogListPage implements OnInit {
  // la propriete contenant la liste des chiens
  doglist!:Dog[];
  selected?:Dog;
  addDog:Dog = {
    name: '',
    breed: '',
    birthdate: '2220-04-22',
  };

    // constructeur
  constructor(private DogService: DogServiceService, private route: Router){}

  
  // methode declancher au rendu du composant
  ngOnInit(): void {
    this.DogService.getAllDog().subscribe(data=>this.doglist=data)

  }
  deleteDog(){
    this.DogService.deleteDogbyId(this.selected?.id).subscribe(()=>{
      this.doglist=this.doglist.filter(item=>item.id != this.selected?.id)
      this.selected=undefined
    })
  }
  postDog(){
    this.DogService.dogAdd(this.addDog).subscribe(data=>this.doglist.push(data));
  }
  
  select(dog:Dog){
    if(this.selected==dog){
      this.selected = undefined
    }else{
      this.selected =dog;
    }
  }
  updateDog(){
    if(this.selected)
    this.DogService.updateDog(this.selected).subscribe()
  }
 // @ViewChild(IonModal) modal!: IonModal;
}
