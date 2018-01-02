import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`<h2>This Test Tutorial component</h2>
            <h4>Sub Component</h4>
            <input type="text"  [(ngModel)]="fname"/>
            <input type="text"  [(ngModel)]="lname"/>
            <br>
            Full name: {{fname}} {{lname}}
            `,
            styles:[`.redColor{
                color:red;
            }`]
})
export class TutorialComponent{
    public applyClass = true;
    public blueColor = true;
}