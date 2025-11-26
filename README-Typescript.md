
# Typescript

- TypeScript (TS) is a superset of JavaScript created by Microsoft.
  - That means it builds on top of JavaScript, adding extra features — the biggest one being static typing.
- is CASE SENSITIVE

- **[filename].ts**
  - ex:  app.component.ts
  - corresponding class name:  AppComponent

- **export**: makes the class accessible from outside of this file
  


```
    # String
    title: string = 'app';
    title = 'app'; // the type is deducted by Angular

    # Array
    items = [ 'item1', 'item2' ];

    # method / function
    log(text: string): void{   
       var message: string = 'Message: '+ text;     
       var message = 'Message: '+ text;      // type could be omitted


       console.log(message )
    }

    # THIS
    sum(a: number, b: number): number { 
        var r = a + b;
        this.log(r)

        this.items.....

        return r; 
    }

    sum(a: number, b: number) { return a + b; }    // type could be omitted

    var app: AppComponent = new AppComponent();


```

### Types:
- number
- string
- boolean
- number[]
- string[]
- boolean[]
- custom type, e.g. AppComponent

--------------------------------------------------------------
### Interface
```
    # generates an interface named appointment in models folder
    ng g interface models/appointment
```