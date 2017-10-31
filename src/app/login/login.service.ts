import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    isValidLogin(password) {
        if (password === '123456') {
            return true;
        }else {
            return false;
        }
    }
}
