import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {
    private user?: string;

    setUser(user:string) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}