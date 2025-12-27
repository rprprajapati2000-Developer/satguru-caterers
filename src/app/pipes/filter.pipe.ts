import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../models/menu-item';
// import { MenuItem } from '../models/menu-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: MenuItem[], category: string): MenuItem[] {
    if (!items || category === 'all') {
      return items;
    }
    return items.filter(item => item.category === category);
  }
}