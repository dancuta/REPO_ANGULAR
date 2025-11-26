- Angular app is a SPA - **Single Page Application**
- Run on a web server:
  - require** node.js** and **npm**
- 

# NPM - Node Package Manager
```
    # install version
    npm i @angular/cli@16.1.6 --location=global

    # which versions you've got installed
    ng v
 

```
---------------------------------------------------------------------------

# CREATE PROJECT
```
    ng new yes-no-dropdown --no-standalone
    
    # ??? if you have decided to go with version 17 over version 16 you will have to add the --no-standalone in the project creation command: ng new my-app --no-standalone
    ng new my-app --no-standalone. If you forget to add this flag you will have no global app.module.ts file which is required to register several services.

    cd yes-no-dropdown
    npm install primeng primeicons
    npm install primeng
    npm install bootstrap
```

# START APP

-  install the dependencies needed to run the app.
    mpm install

- build app:
    ng build

- run app:
```
    ng serve
    # start application and open application in browser
    ng serve -o
```    

http://localhost:4200

----------------------------------------------------------------------------------
# <app-root>
- The first component created amd used is <app-root> component

```
    <app-root></app-root>
```

----------------------------------------------------------------------------------
## Data Binding

### One way data binding  
   ```
        export class App {
            protected readonly title = signal('My first Angular app');
        }
            ---> title could be displayed in html templateusing {{}}

        # template / html page
        {{ title }}
   ```


----------------------------------------------------------------------------------

## Component

- When you create your HomeComponent, you use these properties:
    -   selector: to describe how Angular refers to the component in templates.
    -   standalone: to describe whether the component requires a NgModule.
    -   imports: to describe the component's dependencies.
    -   template: to describe the component's HTML markup and layout.
    -   styleUrls: to list the URLs of the CSS files that the component uses in an array.

- Create component:
```
    ng generate component home --inline-template --skip-tests

    # short form
    ng g component home 
    ng g c home 
            

```            
            
   
-> This will add lines : 
```
                    import { AppointmentList } from './appointment-list/appointment-list';
                    @NgModule({
                        declarations: [
                            App,
                            AppointmentList
                        ]
                        ...
                    )     
           to app-modules.ts file
```


-  Add the new component to your app's layout:

## Services

- **@Injectable**
```
# Create reservation service inside <<reservation>> folder
ng g s reservation/reservation-service

```


-----------------------------------------------
## Modules
- are used for encapsulation
- **app-modules.ts**
  -  list of modules used by the app:
    ```
        @NgModule({
            declarations: [
                App,
                AppointmentList,
                AppHeader
            ],
    ```

- Important modules to be added in **app-modules.ts** file:
  - NgModule
  - BrowserModule
  - **FormsModule**: import { FormsModule } from '@angular/forms';
    - only after that we can use [(ngModel)]="newAppointmentDate"  in components

### ngModel / FormsModel - Template-driven
- Iport module FormsModule in app-modules.ts / the module where you want to use it:
```
    import { FormsModule } from '@angular/forms';

    # Usage in HTML:
    <input [(ngModel)]="guestName"   placeholder="Guest Name" class="form-control"/>
```

- Sample declaration of a custom module called module:
    ```

       > ng g module [module-name]                                  # create module
       > ng g component [component-name] --module=[module-name]     # create component inside module

        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';

        @NgModule({
        declarations: [],
        imports: [
            CommonModule
        ]
        })
        export class HomeModule { }
    ```

### formGroup, formControlName / ReactiveFormsModule 
```
    # Import ReactiveFormsModule into the module where you want to use it:
    import { ReactiveFormsModule } from '@angular/forms';

    # Usage in HTML:
    <form [formGroup]="myForm">
        <input type="string" formControlName="name">
        <button type="submit" class="btn btn-primary w-100" [disabled]="!isValid()">Submit</button>
    </form>

```

### CommonModule: *ngIf, *ngFor, date, uppercase
- import { CommonModule } from '@angular/common';

-----------------------------------------------
## Use LOCAL STORAGE: localStorage
- a slot inside browser: up to 5MB
- convert  from type script object to JSON object and save it in the local storage

```
    localStorage.setItem();
    # Example:
         localStorage.setItem("appointments", JSON.stringify(this.appointments));

```

-----------------------------------------------
## ngOnInit()
- it is called when component is initialized
- must import **OnInit** module
- class must implement **OnInit**
- Example:
```
    import { OnInit } from '@angular/core';

    # inside class
    export class AppointmentList implements OnInit {
        ngOnInit(): void { }
    }
```

-----------------------------------------------
## Bootstrap
- Adding Bootstrap for styling
- Documentation:
  - http://getbootstrap.com
- 

```
    npm install bootstrap
```
- This creates a **bootstrap** folder inside <<**node_modules**>> folder.
- **styles.css** - global CSS styles for the application
- Import bootstrap style  into **styles.css**  
  ```
     @import "bootstrap/dist/css/bootstrap.min.css"; 
  ```
- Needs:
  ```
    <div class="container></div>  
  ```
- Important Bootstrap classes provided by the library:
  - container
  - card
  - row
  - col, col-md-6
  - 
-----------------------------------------------
## Routing

- Defines all routes and their corresponding components.
- file that defines the routings is imported in **app.config.ts** file
  
```
    # Sample of a routing definition:
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';


    export const routes: Routes = [
    //      { path: '', component: HomeComponent },
    //   { path: 'about', component: AboutComponent }

    ];


    @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }
```
-----------------------------------------------
   RouterModule 
```
  <button [routerLink]="['/new']">Create a new reservation</button>
  <button [routerLink]="['/list']">Check all reservations</button>
```

------------------------------------------------------------------------
```
    <button type="submit" class="btn btn-primary w-100" [disabled]="!isValid()">Submit</button>
    <button type="submit" class="btn btn-primary w-100" [disabled]="reservationForm.invalid">Submit2</button>

```

### Validation messages

```
     <form [formGroup]="reservationForm" (ngSubmit)="onSubmit()">

        <div>
            <label>Check-in date:</label>
            <input type="date" formControlName="checkInDate" class="form-control"/>
            <div *ngIf="reservationForm.get('checkInDate')?.invalid  && reservationForm.get('checkInDate')?.touched" style="color: red">!!! Check-in date is required!</div>
        </div>
    </form>
```

-----------------------------------------------
## ng-template
- Is not rendered by default
- It is deprecated
```
    <ng-template #noReservations>
      <h4 class="text-center mt-5">No reservations found.</h4> 
    </ng-template>
```


- New usage:
```
     @if(getNumberOfBookings() > 0){
    <ul class="list-group mt-3">
      @for(item of getReservations(); track item.id) {
        <li class="list-group-item d-flex justify-content-between align-items-left">
          {{ item.id}}  - {{ item.guestName }} at {{ item.checkInDate}}</li>
      }
 
    </ul>
   }
      @else { 

  
      <h4 class="text-center mt-5">No reservations found.</h4> 
  
   }
```
-----------------------------------------------
## Observable of()

- **of()**

-----------------------------------------------
```
    <a routerLink="">a link</a>

    <button [routerLink]="'/create'">Create</button>

    <form [formGroup]="reservationForm" (ngSubmit)="submitReservation()"></form>

    <input type="date" formControlName="checkInDate" class="form-control"/>

    router.navigate(...)

    <router-outlet></router-outlet>
	    - Wherever Angular sees <router-outlet>, it loads the component that matches the current route.
	    - So when navigation changes, Angular replaces the view inside <router-outlet>.

```

-----------------------------------------------
## Directives

1. **Component Directives**
- These are directives with a template.
- In Angular, every component is actually a directive + template.
    ```
    @Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
    })
    export class UserComponent { }

    # Usage:
    <app-user></app-user>
    ```

2. **Structural Directives** 
- ngIf, ngFor, ngSwitch, ngSwitchCase
- These directives change the DOM structure by adding/removing elements.
    ```
    <div *ngIf="isLoggedIn">Welcome!</div>

    ```
1. **Attribute Directives**
- ngClass, ngStyle, ngModel
- These directives change the appearance or behavior of an existing element.
    ```
    <div [ngStyle]="{ color: 'red' }">Hello</div>

    # Custom directive
    @Directive({
        selector: '[appHighlight]'
        })
        export class HighlightDirective {
        constructor(el: ElementRef) {
            el.nativeElement.style.backgroundColor = 'yellow';
        }
    }
    # Usage:
    <p appHighlight>Highlighted text</p>

    ```

-----------------------------------------------
## Services

- In Angular, a service is a reusable class that provides data, logic, or functionality that multiple components can share.
- **@Injectable({     providedIn: 'root'        })**
  - Create one single instance of this service. Angular registers the service in the root injector, meaning:
        - The service is created once for the entire application
        - All components and services share the same instance
        - This is known as a singleton service
    - **providedIn: 'root'**: No need to list the service in any module's providers array
    - If it is not provided in root => you must specify in module
      ```
        providers: [ReservationService]
      ```
- If the service is never used, Angular will automatically remove it from the final bundle.
  
- Example:  
    ```
    @Injectable({
        providedIn: 'root'
        })
    export class MyService { }

    # Dependency Injection Basics
    constructor(private userService: UserService) {}

    ```
-----------------------------------------------
 ## Mockoon - create mock API

-----------------------------------------------
## Http requests
- HttpClient, Observable
```
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

# Add route for editing
const routes: Routes = [ { path: 'edit/:id', component: ReservationFormComponent }  ];

# to use router, import it in the component
import { Router, ActivatedRoute  } from '@angular/router';

# GET
return this.http.get<ReservationModel[]>(this.REZERVATIONS_ENDPOINT);
# call the GET method from service
private getReservations() {
    console.log("Getting reservations...");
    this.reservationService.getReservations().subscribe(data => {
      this.reservations = data;
});

#POST
return this.http.post<ReservationModel>(this.REZERVATIONS_ENDPOINT + "/" + r.id, r);

# PUT
return this.http.put<ReservationModel>(this.REZERVATIONS_ENDPOINT + "/" + r.id, r);

# DELETE method in service
deleteReservation(id: number): Observable<any> {
     return this.http.delete<any>(
      this.REZERVATIONS_ENDPOINT+ "/" + id, 
      { observe: 'response' });
}
# call the DELETE method from service
deleteReservation(id: number) {
    console.log("Deleting ID: " + id);
    this.reservationService.deleteReservation(id).subscribe({
      next: (response) => {
        console.log('Http Status:', response.status);          // e.g. 200, 204
        console.log('Http Status text:', response.statusText); // e.g. "OK", "No Content"

        if (response.status === 200 || response.status === 204) {
          // success logic here
        }
      },
      error: (error) => {
        console.log('Delete Error Http status:', error.status);   // e.g. 404, 500
        console.log('Delete Error Http body:', error.error);
      }
    });

  }
```


-----------------------------------------------
## Observables - rxjs

- An Observable is an interface to a stream of events, where events are objects that contain some data as the payload.
- A client can subscribe to an Observable to receive the events.
- There’s no limitation on the number of possible subscribers for an Observable
- The Angular’s HttpClient service returns Observables as responses to HTTP calls so it doesn’t block the UI while waiting for the server’s response.

```
obs.subscribe(event => .../* handle the received event */ )


#  you can pipe the observable into a map operator to transform the shape of the event’s payload before it’s delivered to the subscriber.
this.httpClient.get<TaskItem[]>(`${resourceURL}/${date}`)
    .pipe(map(TaskService.mapTaskItems))
    .subscribe(t => this.tasks.next(t))

```
-----------------------------------------------

## Navigation
- Router
- ActivatedRoute

- Define app routes in app-routing-module.ts
``` 
  const routes: Routes = [
        { path: '', component: ContentComponent },
        { path: 'new', component: ReservationFormComponent },
        { path: 'edit/:id', component: ReservationFormComponent },
        { path: 'list', component: ReservationListComponent},
        { path: 'about', component: AboutComponent }
    ];

   @NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
    })
```

- Navigation:
```
    import { Router } from '@angular/router';

    constructor(private reservationService: HttpReservationService,   private router: Router   ) { }

    this.router.navigate(['/edit/' + id]);

    # Retrieve param in route
    this.reservationId = this.activatedRoute.snapshot.params['id'];

```
-----------------------------------------------
## Angular Material Theme

```
ng add @angular/material

# include module where you need it
import {MatCardModule} from '@angular/material/card';

# import style.css into css and angular.json

@angular/material/prebuilt-themes/indigo-pink.css

```

- Include MatCardModule
- import style
-----------------------------------------------
## Angular FLEX-LAYOUT
- https://github.com/angular/flex-layout/blob/master/README.md

```
	npm i -s @angular/flex-layout @angular/cdk
```
-----------------------------------------------
## NgRX - Reactive Ng
- Build reactive applications (respond to changes) with a SINGLE STATE

### Ng and the Flux Pattern
- SELECTOR
- COMPONENT
- STORE:
	- holds the application state; it's immutable - cannot be changed directly
- REDUCER:
	- functions that takes ACTIONS and modify the state base on the action type / process the actions
	- The reducer must know of Book - it only ake care of a segment of app state ( e.g. books)
	- initialState is mandatory
	- REDUCER: copy current state segment, make changes, return new state
	- Reducer means:  ACTION + Current STATE ===> New STATE  
	- StoreModule.forRoot({book: BookReducer}) // the segment related to Book is handled by BookReducer
	```
	@NgModule({
	  declarations: [
		AppComponent
	  ],
	  imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({book: BookReducer}) // the segment related to Book is handled by BookReducer
	  ],
	  providers: [],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }
	```
	
- ACTIONS:
	- events that modify the state in the store
- EFFECTS:
	- handle asynchronously operations and then trigger new ACTIONS
	```
		import { Actions, createEffect, ofType } from '@ngrx/effects';
		createEffect(  )
		
		# Regsister Effects in module
		import { EffectsModule } from '@ngrx/effects';

		@NgModule({
		  declarations: [ ],
		  imports: [			
			EffectsModule.forRoot([BookEffects])
		  ],
	```
- SERVICE
   
      
   
### One-way data flow   
- The updated state is automatically passed to the component via SELECTORs

	```
		Actions --> Reducers --> Updated Store --> Selectors share updates
	```

```
	# https://www.npmjs.com/package/@ngrx/effects
	# If you have Angular 16:
	npm install @ngrx/store@16.2 @ngrx/effects@16.2
	# For other Angular versions
	npm install @ngrx/store
	npm install @ngrx/effects


```
-----------------------------------------------

## Naming convensions:
- varName$ - is used to indicate an Observable

-----------------------------------------------
# Angular DevTools extension for Chrome 
- Install Angular DevTools extension for Chrome 
- Install Redux DevTools extension for Chrome 

	
- From Integrated Terminal in Visual Studio Code:
```
	npm install @ngrx/store-devtools
```

- Import in app.module.ts
```
	import { StoreDevtoolsModule } from '@ngrx/store-devtools';

	@NgModule({
	  declarations: [	  ],
	  imports: [	 StoreDevtoolsModule.instrument()]	  
	  })
```

- In Chrome: DevTools > Angular tab + Redux tab
		
-----------------------------------------------
## Run tests:  .spec.ts
- spec means test specifications

```
    ng test
	
```

- Configuration for Karma in angular.json:
```
    "test": {
          "builder": "@angular/build:karma",
    }

```

- Browser will be opened: 
- Karma server started:
  - http://localhost:9876/
- 


-----------------------------------------------