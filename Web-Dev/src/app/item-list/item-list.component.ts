import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item/item.model';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items!: Item[];
  newTitle = '';
  newDescription = '';
  newID = '';
  newCategoryId = ''
  newType = 'book'; 
  newCategoryName = '' // Здесь предполагаем, что у тебя есть input для category_
  newDate = new Date().toISOString(); // Здесь предполагаем, что у тебя есть input для даты

  addItem() {
    const item = {
      title: this.newTitle,
      description: this.newDescription,
      id: +this.newID,
      category_id: +this.newCategoryId, // отправляем только id категории
      type: this.newType,
      created_at: new Date(),
    };
  
    this.itemService.addItem(item).subscribe({
      next: () => this.ngOnInit(),
      error: (err) => console.error('Error adding item:', err)
    });
  }
  

  deleteItem(id:number) {
    this.itemService.deleteItem(id).subscribe(() => this.ngOnInit());
  }

  updateItem(item: Item) {
    const updated = {...item, title: item.title + ' updated'};
    this.itemService.updatedItem(updated).subscribe(() =>this.ngOnInit());
  }

  constructor(private itemService: ItemService) {}
  
  ngOnInit() {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    }, error => {
      console.error('Error fetching items:', error);
      this.items = []; // Set items to an empty array in case of error
    }

  );
  }
}
