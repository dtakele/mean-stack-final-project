import './rxjs-extensions';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {CalculatePricePipe} from "./calculate-price.pipe";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {CreateItemService} from "./create-item/create-item.service";
import {ItemDetailService} from "./item-detail/item-detail.service";
import {SellItemsComponent} from "./sell-item/sell-items.component";
import {SellItemsService} from "./sell-item/sell-items.service";
import {CreateItemComponent} from "./create-item/create-item.component";
import {BuyItemService} from "./buy-item/buy-item.service";
import {BuyItemComponent} from "./buy-item/buy-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
      NgbModule.forRoot()
  ],
  providers: [CreateItemService, SellItemsService,ItemDetailService,BuyItemService],
  declarations: [
                  AppComponent,
                  CalculatePricePipe,
                  SellItemsComponent,
                  CreateItemComponent,
                  BuyItemComponent,
                  ItemDetailComponent
      ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
