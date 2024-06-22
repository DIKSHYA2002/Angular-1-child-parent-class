angular cli ---
1- nodejs installation 
npm install -g @angular/cli --> latest version locally 
ng --version // check s the version 
ng help serve --> command help for ang cli 


create project 
1- ng new my-first-project 
2- Add routing -. yes 
3- enter css
4- ng serve -o

Angular material installation 
ng add @angular/material

angular components ---
every compnent has 2 element 
1. html (template)
2. typescipt (code)
3. metadata(css )
root component -- app component


creating component 
ng g c demo
add it in the app.module.ts
add the selector in the index.html 

Template - section of html to be included 
1- inline template 
2- template file - file
3- template variables 
4- app.component- default template 
5- material dashoard angular light dashboard , now ui dashboard angular 
6- {{title}} for variables 
7- ngFor - iterate - array

sharing data between components 
1= parent to child == @input decorator 
app-component(parent) -> navabr(child component)

  @Input()  fromParent!: string; (why exclaimatory required??)

child --> parent 
from viewchild and string interpolation
1- viewChild , output

viewChild
  @ViewChild(PostComponent) childComp:any;
  AfterViewInit -- to use the child class components 

  Displaying Data

  <img [src] ="variableName"> //prperty Bindiing

  [class.text-red] = "bool" // class binding in angular 
   [style.color] = "bool?'red':'green'" // inline styling 

   Event Binding

   (click)="functonName()"  the function to defined inside class
  keyup , $event can be passed 
  --------- Event Filtering ------
   $event.keyCode  
   (keyup.enter)= "functon()";

   Id-----------
   <input type = "text" #username>

   Data-2 way binding using ngModel------------

   <input type="text" [(ngModel)]="userName" (keyup.enter) = "onKeyup()"  >   
