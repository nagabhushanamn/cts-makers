
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'priceDiscount'
})
export default class PriceDiscountPipe implements PipeTransform {

    transform(originalPrice: number, args?: any) {
        if (!args)
            return originalPrice - 1;
        else
            return originalPrice - args;

    }

}