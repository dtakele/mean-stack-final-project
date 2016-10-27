import {Injectable} from "@angular/core";
import {Item} from "../create-item/item";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BuyItemService{

    private itemUrl = 'api/items';
    private itemSearchUrl = 'api/search' ;

    constructor(
        private http:Http) { }

    getItems() : Promise<Item[]>{
        return this.http.get(this.itemUrl)
            .toPromise()
            .then(res => res.json().data as Item[]);
    }


    search(term: string): Observable<Item[]> {

        const url = `${this.itemSearchUrl}${term ? '/' + term : ''}`;
        return this.http
            .get(url)
            .map((r) => r.json().data as Item[]);
    }
}