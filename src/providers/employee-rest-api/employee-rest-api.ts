import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the EmployeeRestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmployeeRestApiProvider {

  private apiUrl = 'http://dev.aio.co.id/ionic/getEmployee.php';

  constructor(public http: HttpClient) {
    console.log('Hello EmployeeRestApiProvider Provider');
  }

  getEmployee(NIK : string ,key : string): Observable<string[]> {
      return this.http.get(this.apiUrl+"?NIK="+NIK+"&key="+key).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
      }
      
      private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const err = error || '';
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }

}
