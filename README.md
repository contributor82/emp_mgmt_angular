# Employee Management using angular 18.

# Install Angular CLI
'npm install -g @angular/cli' to install angular CLI

# Check installed Angular Version
'ng v' to check installed angular version

# Create new Angular project
'ng new angular_18_tutorial' to create a new angular project

# Create new component
'ng generate component roles' to generate a new component.

# Alternative way to create component
Another way to create component is
'ng g c designation' to generate new component

# Build Angular project
'ng build'

# Run Development server
'ng serve' to compile and run the application. It will provide an URL to click where application will be available.

Use directives in html for conditional elements display.
Directives : Structural (ngIf, ngFor) & Attribute (ngClass, ngStyle)

API Call

# To run the project on different port
'ng serve --port 4209'

# Create a new service
'ng g s [service name]'

Using Control flow statement in HTML files
@if..@else, @for, @switch

# Using Routing
Define Routes in app.routes
Add  <router-outlet></router-outlet> in app.Component HTML
Import RouterLink, RouterLinkActive in App component

# Using environment constants in project
'ng g environmments' to generate environment folder structure.
It will angular.json file and we can add constants in environment.ts file.

# Using pipe in project
Using pipe - The purpose of pipe is to format the data in HTML.
Two types - Built-in pipes (UpperCasePipe, DatePipe,JsonPipe) and Custom pipes.
JsonPipe : for displaying the object in JSON format.
AsyncPipe : for directly subscribing method call to HTML
Import the pipe module before using it.

# Using Constants in project
Using Constants: Instead of using hard coded messages, API names in component,services, Create
a constant file & export it just like Constant\Constant.ts and use it in the project.

# Using Signal
Signal means comparing signals with rxjs or comparing signals with observables.
Signal can be invoked from HTML/ts file just like a function call.

 provideZoneChangeDetection is added for Change detection purpose in app.config.js file
 Change detection works by using Zone.js
 Angular is getting rid of Change detection slowly and may appear in its up coming versions
 Signl does the same thing and it will be used often later too for especially for loading collections, objects, form objects etc.

# Reusable component
Create a reusableComponent folder in components
'ng g c alert' Here we are creating alert as a reusable component. It can be used in all pages.
To add <app-alert></app-alert> in HTML file, first update Imports of ts and
add AlertComponent in it.
To pass the data from parent component to child component, create properties such as
@Input() inputData: string = '';

To pass the data from child component to parent component, create properties such as
@Output outputData: string = '';

# Creating login & layout since it is a admin app
User can login through login page by entering credentials and then access respective pages.
layout is where user will be loggged out.
but still we are able to access pages directly without entering credentials through login page
http://localhost:4200/
hence creating a guard to restrict such access

# Using Guard
'ng g g auth' Creating auth guard.
4 types of guards - CanActivate, CanActivateChild,CanDeactivate, CanMatch
Guard helps to authorize entry to access pages after entering valid credentials to login.
Acess localstorage to validate in guard and then using router redirect to login page to avoid
unauthorized access to a page.
Configure guard using CanActivate in app.router.ts to apply for all pages (components)
