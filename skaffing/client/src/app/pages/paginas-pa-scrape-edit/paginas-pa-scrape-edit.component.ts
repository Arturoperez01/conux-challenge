// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { PaginasPaScrapeService } from '../../services/paginas-pa-scrape.service';
// Import Models
import { PaginasPaScrape } from '../../domain/skaff_db/paginas-pa-scrape';

// START - USED SERVICES
/**
* paginasPaScrapeService.create
*	@description CRUD ACTION create
*
* paginasPaScrapeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* paginasPaScrapeService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* paginasPaScrapeService.list
*	@description CRUD ACTION list
*
* paginasPaScrapeService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a PaginasPaScrape
 */
@Component({
    selector: 'app-paginas-pa-scrape-edit',
    templateUrl: 'paginas-pa-scrape-edit.component.html',
    styleUrls: ['paginas-pa-scrape-edit.component.css']
})
export class PaginasPaScrapeEditComponent implements OnInit {
    item: PaginasPaScrape;
    model: PaginasPaScrape;
    formValid: Boolean;

    constructor(
    private paginaspascrapeService: PaginasPaScrapeService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new PaginasPaScrape();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.paginaspascrapeService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save PaginasPaScrape
     *
     * @param {boolean} formValid Form validity check
     * @param PaginasPaScrape item PaginasPaScrape to save
     */
    save(formValid: boolean, item: PaginasPaScrape): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.paginaspascrapeService.update(item).subscribe(data => this.goBack());
            } else {
                this.paginaspascrapeService.create(item).subscribe(data => this.goBack());
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



