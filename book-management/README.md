https://github.com/JannickLeismann/angular-course-book-management-ngrx/commits/master

```
	# https://www.npmjs.com/package/@ngrx/effects
	# If you have Angular 16:
	npm install @ngrx/store@16.2 @ngrx/effects@16.2

    ng serve

    ng g i models/book
    ng g i app.state 

```

- app.state.ts
- book.ts - model interface
- book.actions.ts
  - import { createAction, props } from "@ngrx/store";
