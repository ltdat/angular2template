"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
        this.applyClass = true;
        this.blueColor = true;
    }
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>This Test Tutorial component</h2>\n            <h4>Sub Component</h4>\n            <input type=\"text\"  [(ngModel)]=\"fname\"/>\n            <input type=\"text\"  [(ngModel)]=\"lname\"/>\n            <br>\n            Full name: {{fname}} {{lname}}\n            ",
            styles: [".redColor{\n                color:red;\n            }"]
        })
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map