import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth-service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private auth :AuthService) { }

    intercept(request, next) {
        let currentUserToken = localStorage.getItem('token');
        if (currentUserToken) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${currentUserToken}`
                },
            });
        }
        // console.log("Request", request)
        return next.handle(request);
    }
}