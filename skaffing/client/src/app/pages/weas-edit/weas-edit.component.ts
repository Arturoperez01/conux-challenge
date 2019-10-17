// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { WeasService } from '../../services/weas.service';
import { UserService } from '../../services/user.service';
// Import Models
import { Weas } from '../../domain/skaff_db/weas';
import { User } from '../../domain/skaff_db/user';

// START - USED SERVICES
/**
* weasService.create
*	@description CRUD ACTION create
*
* weasService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* UserService.list
*	@description CRUD ACTION list
*
* weasService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Weas
 */
@Component({
    selector: 'app-weas-edit',
    templateUrl: 'weas-edit.component.html',
    styleUrls: ['weas-edit.component.css']
})
export class WeasEditComponent implements OnInit {
    item: Weas;
    listAsdfg: User[];
    model: Weas;
    formValid: Boolean;

    constructor(
    private weasService: WeasService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Weas();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.weasService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.userService.list().subscribe(list => this.listAsdfg = list);
        });
    }


    /**
     * Save Weas
     *
     * @param {boolean} formValid Form validity check
     * @param Weas item Weas to save
     */
    save(formValid: boolean, item: Weas): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.weasService.update(item).subscribe(data => this.goBack());
            } else {
                this.weasService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



