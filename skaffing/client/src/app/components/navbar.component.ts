import { Component } from '@angular/core';
import { store } from 'src/app/security/current-user';
import { OnInit } from '@angular/core';
import { User } from 'src/app/domain/skaff_db/user';
import { AuthenticationService } from 'src/app/security/authentication.service';

/**
 * This component manage the NavBar
 *
 * @class NavbarComponent
 */
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

    user: User;
    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.getUser().subscribe(user => this.user = user, err => this.user = null);
        store.currentUser$.subscribe(user => this.user = user);
    }
}
