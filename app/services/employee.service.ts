import {Injectable} from '@angular/core'
@Injectable()
export class EmployeeService{
    GetList():any{
        let employees: any[]=[
            {Id:1,Name:"Le Tien Dat"},
            {Id:2,Name:"Nguyen Van Phuc"},
            {Id:3,Name:"Hoang Nghia Quyen"},
            {Id:4,Name:"Vu Xuan Thien"},
            {Id:5,Name:"Dang Manh Tuong"}
        ];
        return employees
    }
}