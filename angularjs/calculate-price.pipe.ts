/**
 * Created by 985178 on 10/20/2016.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calculatePrice'})
export class CalculatePricePipe implements PipeTransform {
    transform(price: number, quantity: number): number {
      return price * quantity;
    }
}
