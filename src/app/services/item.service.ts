import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = 'http://localhost:3000/items';
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  /*
  items:Item [] = [
    
      {
        id: 0,
        title: 'Manzana',
        price: 25,
        quantity: 4,
        completed: false
      },
      {
        id: 0,
        title: 'Pera',
        price: 20,
        quantity: 3,
        completed: false
      },
      {
        id: 0,
        title: 'Naranja',
        price: 30,
        quantity: 5,
        completed: false
      }
    
  ];
  */
  constructor(private http:HttpClient) { }


  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url)
  }

  addItem(item:Item):Observable<Item>{
    //this.items.unshift(item);

    return this.http.post<Item>(this.url, item, this.httpOptions)
  }

  toggleItem(item:Item):Observable<any>{
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions)
  }

  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id)
  }
}
