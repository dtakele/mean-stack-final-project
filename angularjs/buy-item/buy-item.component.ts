
import {Component, OnInit} from "@angular/core";
import {Item} from "../create-item/item";
import {BuyItemService} from "./buy-item.service";
import {Router} from "@angular/router";
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
    moduleId : module.id,
    selector: 'buy-item',
    templateUrl:'../angularjs/buy-item/buy-item.component.html'
})

export class BuyItemComponent implements OnInit{

    items: Observable<Item[]>;
    private searchTerms = new Subject<string>();

    constructor(private buyItemService : BuyItemService,
                private router : Router){}

    ngOnInit(): void {
        this.items = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term =>
                this.buyItemService.search(term))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Item[]>([]);
            });
        setTimeout(() => { this.search(null);}, 0);
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    selectItem(item: Item) : void {
        this.router.navigate(['/itemdetail', item._id]);
    }
}
