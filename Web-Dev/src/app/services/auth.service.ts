import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://127.0.0.1:8000/api/'; // Replace with your API URL

    constructor(private http: HttpClient){}

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
    }

    logout(): void {
        localStorage.removeItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ1NjU5OTk0LCJpYXQiOjE3NDU2MDkzODgsImp0aSI6IjIxNzZlNzM3MzFhMTQ5MWZhMTQ3MTMyN2M0MWQ4Yzk4IiwidXNlcl9pZCI6MX0.0Yk_hWfiVoDPxxcIksJm6zrHwhNf5giyEaBqIxkWcI8');
    }
}