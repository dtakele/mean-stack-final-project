
import {Component, OnInit} from "@angular/core";
import {Item} from "../create-item/item";
import {ActivatedRoute, Params} from "@angular/router";
import {ItemDetailService} from "./item-detail.service";
import { Location }  from '@angular/common';

@Component({
    moduleId : module.id,
    selector: 'item-detail',
    templateUrl:'../angularjs/item-detail/item-detail.component.html'
})

export class ItemDetailComponent implements OnInit{

    item : Item;
    constructor(private route: ActivatedRoute,
                private itemDetailService : ItemDetailService,
                private location: Location){

    }

    ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.getItem(id);
        });

    }

    getItem(id:string){
        this.itemDetailService.getItem(id)
            .then(res => {this.item = res});
    }
    goBack(): void {
        this.location.back();
    }
}