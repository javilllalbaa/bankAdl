import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"creditFormat"
})

export class creditFormatPipe implements PipeTransform{
    transform(value:string) : string{
        if(value.length > 13){
            return "**** **** **** **" + /.{2}$/.exec(value)
        }else{
            return value
        }
    }
}