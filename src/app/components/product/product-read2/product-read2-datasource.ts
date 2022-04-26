import { Product } from './../product.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


const EXAMPLE_DATA: Product[] = [
  {id: 1, name: 'x', classe: 'x',especie: 'x',langage: 'x',
  player: 'x',dinheiro: 0,xp: 0,level: 0,age: 0,forca: 0,resistencia: 0,
  agilidade: 0,persepcao: 0, presisao: 0,inteligencia: 0,
  sopro: 0,coragem: 0,carisma: 0
 /* {id: 2, name: 'Helium', price: ''},
  {id: 3, name: 'Lithium', price: ''},
  {id: 4, name: 'Beryllium', price: ''},
  {id: 5, name: 'Boron', price: ''},
  {id: 6, name: 'Carbon', price: ''},
  {id: 7, name: 'Nitrogen', price: ''},
  {id: 8, name: 'Oxygen', price: ''},
  {id: 9, name: 'Fluorine', price: ''},
  {id: 10, name: 'Neon', price: ''},
  {id: 11, name: 'Sodium', price: ''},
  {id: 12, name: 'Magnesium', price: ''},
  {id: 13, name: 'Aluminum', price: ''},
  {id: 14, name: 'Silicon', price: ''},
  {id: 15, name: 'Phosphorus', price: ''},
  {id: 16, name: 'Sulfur', price: ''},
  {id: 17, name: 'Chlorine', price: ''},
  {id: 18, name: 'Argon', price: ''},
  {id: 19, name: 'Potassium', price: ''},
  {id: 20, name: 'Calcium', price: ''},*/
  }];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductRead2DataSource extends DataSource<Product> {
  data: Product[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]): Product[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]): Product[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
