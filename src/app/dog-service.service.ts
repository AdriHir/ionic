import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from './Entities';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
 
  constructor(private http:HttpClient) { }     ;

      // methode pour recuperer la liste des chients
      getAllDog(){

        return this.http.get<Dog[]>('http://127.0.0.1:8000/api/dog/');
      }

      deleteDogbyId(id:number):Observable<any>{
        return this.http.delete(`http://127.0.0.1:8000/api/dog/${id}`)
      }

      dogAdd(dog:Dog){
        return this.http.post<Dog>(`http://127.0.0.1:8000/api/dog/`,dog)
      }
    }
  