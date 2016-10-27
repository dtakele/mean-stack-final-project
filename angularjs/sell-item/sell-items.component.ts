import {Component, OnInit} from "@angular/core";
import {Item} from "../create-item/item";
import {SellItemsService} from "./sell-items.service";
import {Router} from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sell-items',
    moduleId: module.id,
    templateUrl:'../angularjs/sell-item/sell-items.component.html'
})
export class SellItemsComponent implements OnInit {
    items : Item[];
    itemToDelete : Item;

    constructor(private sellItemsService: SellItemsService,
                private router : Router, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
        this.sellItemsService.getItems().then((sellingItems:Item[]) => this.items = sellingItems);
    }

    selectItem(item: Item) : void {
        this.router.navigate(['/itemdetail', item._id]);
    }

    editItem(item:Item):void{
        this.router.navigate(['/createitem/', item._id]);
    }

    deleteItem (item:Item, content:any) : void{
        this.itemToDelete = item;
        this.modalService.open(content).result.then((result) => {
            if ('ok' == result){
                this.confirmDeletion();
            }
        }, (reason) => {
            this.itemToDelete = null;
        });
    }

    confirmDeletion() : void{
        this.sellItemsService.deleteItem(this.itemToDelete._id)
            .then(res => {
                this.itemToDelete = null;
                return this.getItems();
            });
    }
}