/**
 * Created by 985178 on 10/21/2016.
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CreateItemComponent} from "./create-item/create-item.component";
import {BuyItemComponent} from "./buy-item/buy-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {SellItemsComponent} from "./sell-item/sell-items.component";

const routes: Routes = [
    { path: '', redirectTo: '/buyitem', pathMatch: 'full' },
    { path: 'buyitem', component: BuyItemComponent},
    { path: 'createitem', component: CreateItemComponent},
    { path: 'createitem/:id', component: CreateItemComponent},
    { path: 'sellitem', component: SellItemsComponent},
    { path: 'itemdetail/:id', component : ItemDetailComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
