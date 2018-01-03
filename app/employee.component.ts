import {Component} from '@angular/core';
@Component({
    selector:'employee-list',
    templateUrl: '/app/employee.component.html',
})
export class EmployeeListComponent{
    public employees: any[]=[
        {Id:1, Name:"Nguyen Van Phuc"},
        {Id:2, Name:"Ta Quang Huy"},
        {Id:3, Name:"Nguyen Van Cau"}
    ];
}