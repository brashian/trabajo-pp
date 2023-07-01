import { Component} from '@angular/core';

import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Item[] = [];
  total: number = 0;

  constructor(private itemService:ItemService) {}

  ngOnInit() {
    
    this.itemService.getItems().subscribe(items => {
      this.items = items
      this.getTotal();
    })
    
  }

  eliminarItem(item: Item){
    this.items = this.items.filter( i => i.id != item.id)
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }


  toggleItem(item: Item){
    this.itemService.toggleItem(item).subscribe( i =>{})
    this.getTotal()
  }

 getTotal(){
    this.total = this.items.filter( item => item.completed === false).map(item => item.price * item.quantity).reduce((acum, item) => acum += item , 0);
  }
}
