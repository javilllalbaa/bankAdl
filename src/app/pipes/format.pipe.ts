import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"format"
})

export class FormatPipe implements PipeTransform{

    transform(value:string) : string{
        Number.prototype.format = function(n, x) {
            var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
            return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
        };
        var test = new Number(value).format(2, 3)
        return new Number(value).format(2, 3);
    }
}