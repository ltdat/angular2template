"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.GetList = function () {
        var employees = [
            { Id: 1, Name: "Le Tien Dat" },
            { Id: 2, Name: "Nguyen Van Phuc" },
            { Id: 3, Name: "Hoang Nghia Quyen" },
            { Id: 4, Name: "Vu Xuan Thien" },
            { Id: 5, Name: "Dang Manh Tuong" }
        ];
        return employees;
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map