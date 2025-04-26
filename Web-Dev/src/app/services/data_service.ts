import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private apiUrl = 'http://127.0.0.1:8000/api/books'; 

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ1NjU3NTQwLCJpYXQiOjE3NDU2MDkzODgsImp0aSI6ImNjN2E3MWNhMjM0YzQxY2JhMWQ5N2U3YTIyOTFmNDZiIiwidXNlcl9pZCI6MX0.JdgBrlUm8Q2xqZcPQj9QGPxpfVVPMOo67_LvKmf3848');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
