import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from './item/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://127.0.0.1:8000/api/books/';

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ1NjY1MTE1LCJpYXQiOjE3NDU2MDkzODgsImp0aSI6ImUzOGE3MjU2N2VmYTRmMjlhNjZlMTgzYjkyYjFmZTNjIiwidXNlcl9pZCI6MX0.J_jt8QcJESAl95uU-E5rUrekWqmsH4Ol5lzIrd9J6o8');  // Получаем токен из localStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
  }

  // Получение всех книг
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  // Добавление новой книги
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item, { headers: this.getAuthHeaders() });
  }

  // Создание книги (можно удалить, так как addItem и createItem делают одно и то же)
  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item, { headers: this.getAuthHeaders() });
  }

  // Удаление книги по ID
  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`, { headers: this.getAuthHeaders() });
  }

  // Обновление книги
  updatedItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}${item.id}/`, item, { headers: this.getAuthHeaders() });
  }
}
