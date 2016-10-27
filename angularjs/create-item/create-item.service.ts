import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Item} from "../create-item/item";

@Injectable()
export class CreateItemService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private itemsUrl = '/api/item';  // URL to web api
    private itemUrl = '/api/item';  // URL to web api

    constructor(
        private http:Http) { }

    create(item:Item): Promise<Item> {
        return this.http
            .post(this.itemsUrl, JSON.stringify(item), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data);
            //.catch(this.handleError);
    }

    getItem(id:string): Promise<Item>{
        const url = `${this.itemsUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(res => res.json().data as Item);
    }

    update(item:Item): Promise<Item> {
        return this.http
            .put(this.itemsUrl, JSON.stringify(item), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data);
    }

    //
    // deleteItem(id:string): Promise<void> {
    //     const url = `${this.itemUrl}/${id}`;
    //     return this.http.delete(url)
    //         .toPromise()
    //         .then(() => null);
    // }
}