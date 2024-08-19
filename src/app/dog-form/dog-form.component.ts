import { Component,Input, OnInit } from '@angular/core';
import { Dog } from '../Entities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DogFormComponent  implements OnInit {
  @Input()
  toEdit!:Dog[];

  constructor() { }

  ngOnInit() {}

}
