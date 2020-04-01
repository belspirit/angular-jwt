import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    user : User;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getUserInfo().pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user;
        });
    }
}