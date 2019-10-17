import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { WeasService } from '../../services/weas.service';
// Import Models
import { Weas } from '../../domain/skaff_db/weas';

// START - USED SERVICES
/**
* weasService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* weasService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Weas
 * @class WeasListComponent
 */
@Component({
    selector: 'app-weas-list',
    templateUrl: './weas-list.component.html',
    styleUrls: ['./weas-list.component.css']
})
export class WeasListComponent implements OnInit {
    list: Weas[];
    search: any = {};
    idSelected: string;
    constructor(
        private weasService: WeasService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.weasService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Weas to remove
     *
     * @param {string} id Id of the Weas to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Weas
     */
    deleteItem() {
        this.weasService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
