# Employee Management using angular.

'npm install -g @angular/cli' to install angular CLI

'ng v' to check installed angular version

'ng new angular_18_tutorial' to create a new angular project

'ng generate component roles' to generate a new component.

Another way to create component is
'ng g c designation' to generate new component

'ng serve' to compile and run the application. It will provide an URL to click where application will be available.

Use directives in html for conditional elements display.

Directives : Structural (ngIf, ngFor) & Attribute (ngClass, ngStyle)

API Call

To run the project on different port, use
'ng serve --port 4209'

Create a new service
'ng g s [service name]'

Using Control flow statement in HTML files
@if..@else, @for, @switch

Using Routing
Define Routes in app.routes
Add  <router-outlet></router-outlet> in app.Component HTML
Import RouterLink, RouterLinkActive in App component

Using environment constants
'ng g environmments' to generate environment folder structure.
It will angular.json file and we can add constants in environment.ts file.

Using pipe - The purpose of pipe is to format the data in HTML.
Two types - Built-in pipes (UpperCasePipe, DatePipe,JsonPipe) and Custom pipes.
JsonPipe : for displaying the object in JSON format.
AsyncPipe : for directly subscribing method call to HTML
Import the pipe module before using it.

Using Constants: Instead of using hard coded messages, API names in component,services, Create
a constant file & export it just like Constant\Constant.ts and use it in the project.

Using Signal
Signal means comparing signals with rxjs or comparing signals with observables.
Signal can be invoked from HTML/ts file just like a function call.

 provideZoneChangeDetection is added for Change detection purpose in app.config.js file
 Change detection works by using Zone.js
 Angular is getting rid of Change detection slowly and may appear in its up coming versions
 Signl does the same thing and it will be used often later too for especially for loading collections, objects, form objects etc.
