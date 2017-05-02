import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'Moneda'
})

export class MonedaPipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value || args.length == 0)
            return value;

        return value + ' ' + args[0];
    }

}