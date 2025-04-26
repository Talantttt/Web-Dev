import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private jwtHelper: JwtHelperService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ1NjU3NTQwLCJpYXQiOjE3NDU2MDkzODgsImp0aSI6ImNjN2E3MWNhMjM0YzQxY2JhMWQ5N2U3YTIyOTFmNDZiIiwidXNlcl9pZCI6MX0.JdgBrlUm8Q2xqZcPQj9QGPxpfVVPMOo67_LvKmf3848');
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        return next.handle(req);
    }
}


export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('jwtToken');
    if(token){
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
        return next(cloned);
    }
    return next(req);
}