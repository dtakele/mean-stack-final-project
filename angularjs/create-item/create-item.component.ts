
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Item} from "./item";
import {CreateItemService} from "./create-item.service";
import { Location }  from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId : module.id,
    selector: 'create-item',
    templateUrl:'../angularjs/create-item/item-form.component.html'
})

export class CreateItemComponent implements OnInit{
    constructor(
        private itemService: CreateItemService,
        private router: Router,
        private location: Location,
        private modalService: NgbModal,
        private route: ActivatedRoute) { }

    model = new Item(null, 0,'', '','','');

    successMsg:string='';
    submitted = false;
    parId:string=null;

    submitbtn:string="Save";

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if(id){
                this.submitbtn="Update";
                this.itemService.getItem(id).then(r => this.model = r );
            }
        });

        }

    onSubmit(content:any) {

        if(this.model._id) {
            this.successMsg = "Your item has been updated successfully";
            this.itemService.update(this.model).then(r => this.displayModal(content));

        }
        else{
            this.successMsg = "Your item has been saved successfully";
            this.itemService.create(this.model).then(r => this.displayModal(content));
        }

        //this.submitted = true;
        this.newItem();
    }

    displayModal(content:any):void{
        this.modalService.open(content).result.then((result) => {
        }, (reason) => { });
    }
    active = true;

    newItem() {
        this.model = new Item(null, 0, '','','');
        this.submitbtn="Save";
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    goBack(): void {
        this.location.back();
    }


}