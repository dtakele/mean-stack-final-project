/**
 * Created by jhon on 25/10/16.
 */

import {Injectable} from "@angular/core";
import {Item} from "../create-item/item";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ItemDetailService{

    private itemUrl = 'api/item';

    constructor(
        private http:Http) { }

    getItem(id:string): Promise<Item>{
        const url = `${this.itemUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(res => res.json().data as Item)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}