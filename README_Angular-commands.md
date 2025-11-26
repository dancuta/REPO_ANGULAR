```
    # install modules
    npm i @angular/cli@16.1.6 --location=global
    
    npm install primeng primeicons
    npm install primeng
    npm install bootstrap
    
	# Install NgRX
	npm install @ngrx/store@16.2 @ngrx/effects@16.2

	# Install DevTools	
	npm install @ngrx/store-devtools@16.2
	#npm install @ngrx/store-devtools



    # Uninstall Angular CLI
    npm uninstall @angular/cli
    npm uninstall @angular/cli --location=global

    # install the dependencies needed to run the app.
    mpm install

    # build app:
    ng build

    # run app:
    ng serve
    # start application and open application in browser
    ng serve -o
   
    # which versions you've got installed
    ng v
    ng version
      
    # CREATE PROJECT
    ng new yes-no-dropdown --no-standalone
    #ng new yes-no-dropdown

    # Create component. This will also add the new component in app-modules.ts
    ng generate component home --inline-template --skip-tests
    # short form
    ng g component home 
    ng g c home 
	
	# Create component in module
	ng generate component my-new-component --module=mymodule
	ng g c my-new-component -m mymodule

	# create a product service in product module
	ng g service product/product

    # Generates an interface named appointment in models folder
    ng g interface models/appointment


    # Generates amodule
    ng g module [module-name]

    # Generate a component in a module
    ng g component [component-name] --module=[module-name]

	# create environment variables => creates 2 files: environments/environment.ts and environments/environment.development.ts
	ng g environments

	# start app with development configuration
	ng serve --configuration=development
            
    # Checks your application for outdated dependencies, and can also update them
    ng update

    # Zone.js:  NG0908: “In this configuration Angular requires Zone.js” error fix
    npm install zone.js
    npm list zone.js    # check if it is installed
        => "zone.js": "^0.15.1" will be present in  package.json
   
```
 


http://localhost:4200
 
 
 

--------------------------------------
## ng tests

- Configuration for Karma in angular.json:
```
    "test": {
          "builder": "@angular/build:karma",
    }

```

# Run tests:
```
    ng test
```
- Browser will be opened: 
- Karma server started:
  - http://localhost:9876/
- 
