import {Component, Input} from '@angular/core';


@Component({
    selector: 'app-user',
    template: `
        <p>The user's name is {{name}}</p>
    `,
})


export class AppComponen{
    @Input() occupation = '';
    @Input() name = '';
}





/*                      button click mouse
@Component({
    selector : 'app-user',
    template : `
        <button (click)="greet()">Greet!</button>
        <section (mouseover) = "onMouseOver()">There's a secret message for you, hover to reveal=> {{ message }}</section>
    `
})

export class UserComponent{
    greet() {
        console.log('Hello, there!');
    }
    message = 'Do you wanna show the secret message?';
    onMouseOver() {
        this.message = 'Way to go!'
    }
}*/







/*                      image
@Component({
    selector : 'app-user',
    template : `
    <div [contentEditable] = "isEditable"><img alt = "photo" ></div>
    `,
})
export class UserComponent{
    isEditable = true;
}*/





/*                  for
@Component({
    selector : 'app-user',
    template : `
        @for ( os of operatingSystems; track os.id ){
            {{ os.name }}
        }
        @for ( un of users; track un.id ){
            <p>{{ un.name }}</p>
        }
    `,
})
export class UserComponent{
    operatingSystems  = [ { id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS'}, { id: 'linux', name: 'Linux' } ];
    users = [ { id: 1, name: 'Alica' }, { id: 2, name: 'John' }, { id: 3, name: 'Jack' }, { id: 4, name: 'Amanda' } ]
}*/

/*          if/else
@Component({
    selector : 'app-user',
    template : `
        @if (isServerRunning){
            <span>Yes, the server is running</span>
        }
        @else {
            <span>No, the server is not running</span>
        }
    `,
})
export class UserComponent{
    username = 'youngTech';
    isLoggedIn = true;
    isServerRunning = true;
}
*/




@Component({
  selector: 'app-component1',
  standalone: true,
  template: `
    Hello {{city}}, {{1+1}}
  `,
  styles: `
    :host {
      color: blue;
    }
  `,
})
export class AppComponent1 {
    city = 'San Francisco';
}
