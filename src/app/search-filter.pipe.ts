import { Pipe, PipeTransform } from '@angular/core';
import e from 'express';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchfilter:string):any {
    if (!value || !searchfilter) {
      return value;
    }
    searchfilter = searchfilter.toLowerCase();
    return value.filter((item: any) => {
      return item.title.toLowerCase().includes(searchfilter);
    });
      return value.filter((item:any) => {
       return item.title.toLowerCase().includes(searchfilter.toLowerCase()) ||  item.title.toLowerCase().indexof(searchfilter) > -1;


      })

  }

}
