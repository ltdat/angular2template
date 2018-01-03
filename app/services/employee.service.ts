import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{
    private apiUrl="https://5a4cf4782f76010012c282a7.mockapi.io/api/employees";
    constructor(private _http: Http){

    }
    GetList():Observable<any>{
       return this._http.get(this.apiUrl).map((respone:Response)=>respone.json())
    }
}