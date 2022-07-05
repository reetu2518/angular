# Angular
Angular is a TypeScript-based free and open-source web application framework.
#### Install Angular: npm install -g @angular/cli
#### To check: ng version
#### Create New Project: ng new ProjectName


### Components:
Components are the building blocks that compose an application.

•	Inline Style: ng generate component ComponentName --inline-style
•	Inline Template: ng generate component ComponentName --inline-template
•	Inline Template and Inline Style: ng generate component ComponentName --inline-template --inline-style

### Interpolation: 
Angular interpolation is used display a component property in the respective view template with double curly braces syntax.

### Angular-CLI: 
The Angular CLI is the fastest, straightforward, and recommended way to develop Angular applications. The Angular CLI makes a number of tasks trouble-free.
#### Commands Eg: ng-build, ng-serve, ng generate, ng test, ng e2e

### Module: 
A module is a mechanism to group components, directives, pipes and service that are related.
#### ng generate module moduleName

### Property Binding:
Interpolation treats boolean value as string whereas property binding doesn't treats boolean value as string.

### Pipes : 
Use pipes to transform strings, currency amounts, dates, and other data for display.
#### For creating custom pipe: ng g p pipeName

### Forms:
#### a) Template Driven: 
Mostly work done in the Component template

#### b) Reactive Form:
Mostly work done in the Component class

#### Data Flow: Template -> Class -> Service -> DB

### Directives:
Directives are classes that add additional behavior to elements in your Angular applications. Use Angular's built-in directives to manage forms, lists, styles, and what users see.
#### ng g directive directiveName

#### ng generate component my-comp --module app-routing.module.ts[*]

### Service
All we have to do is create a class and add methods and properties. Then we can create an instance of this class in our Component and call its methods. One of the best uses of services is to get data from a data source.
#### ng g service serviceName

#### For Creating module routing: ng g m moduleName --routing