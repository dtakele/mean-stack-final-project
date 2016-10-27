import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Item} from "../create-item/item";

@Injectable()
export class SellItemsService {

    private itemsUrl = '/api/items';  // URL to web api
    private itemUrl = '/api/item';  // URL to web api

    constructor(
        private http:Http) {
    }

    getItems(): Promise<Item[]> {

        return this.http
            .get(this.itemsUrl)
            .toPromise()
            .then((r: Response) => r.json().data as Item[]);
    }

    deleteItem(id:string): Promise<void> {
        const url = `${this.itemUrl}/${id}`;
        return this.http.delete(url)
            .toPromise()
            .then(() => null);
    }

}