import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hell Test  Online Angular 2!</h1>
  <h4>App Main Component</h4>
  <input type="text" #textName (keyup)="0" />
  <p>Agree number: {{agree}}. Disgree: {{disgree}}</p>
  <button (click)="changeName()">Change name</button>
  <my-tutorial *ngFor="let person of names" [name]="person" (onVote)="parentVote($event)"></my-tutorial>
  `,
})
export class AppComponent { public agree: number = 0;
  public disgree: number = 0;
  public names = ['Mr A','Mr B','Mr C','Mr D'];

  @ViewChild(TutorialComponent)
  private tutorialComponent: TutorialComponent;

  parentVote(agree: boolean) {
    if(agree) this.agree++;
    else this.disgree++;
  }
  changeName(){
    this.tutorialComponent.setName('Change name in Parent');
  }
}