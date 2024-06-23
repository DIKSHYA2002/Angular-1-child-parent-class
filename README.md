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

   NG-TEMPLATE ONLY WORKS --> simple div doesnt work 
   <ng-template #noData>
        <div >
            empty
        </div>
    </ng-template>

    cannot use  this as a simple html element

NG-SWITCH 

NG-CLASS
  <h1  [ngClass] = "{
        'main': isActive,
        'text-weight' :isActive
    }"> NG-CLASS</h1>


    Angular-Directives--------
    Structural Directives --> manipulating dom structure 
    * symbal leads them *ngFor , *ngIf , *ngSwitchCase 
    
    Atrribute--> [ngStyle] , [ngClass] change the appearnace of the dom 

--------------------------------------------------Directives-- End----------------------------------------------------------
    
Task to Be Done ---
1. form and display the data on the sideeeee

------------------------------------------------ANGULAR -PIPE---------------------------------------------------------
transforming the data only when in need 

1- uppercase , lowercse , decimal , date , json percent 
slice pipe

custom Pipe-- declare in the app.module.ts then import pipe and piprtransform class and implement it in 
new export class 
ng g pipe Pipes/appendCLI

Angular Servicesss-----------------------------------------------------------------------------------------------

share data between 2 unrelated cmponent

if 2 component reuired same fucntion then create an anguular service 

Angular dependency injection --------->
@Component({
  providers:[PostService]
})
construcotr( private postService :PostService )
{

}
// too much memory 
DI Providers---------------->
write the services inside providers of the app.module 
only create instance once  not everytime 
Injectable --
import class 
@Injectable({
  providedIn:'root',
})

creating using angular cli ---- ng g s services/user
blueprint --- ng g i models/post  // interface
import the interface werever required 


angular Servicess END------------------------------------------------------------------------------------------------------------

----ANGULAR-TEMPLATE-FORM------
1- Template- DRiven for 
2- reactive form approach 
#f = 'ngForm' template variable to the form 
(submit)= 'onSubmit(f)'
touched,, invalid , valid 
fullname.touched && fullNme.invalid == true 

ReactiveForms Module

Routing --------------------------------------------------------------------------------------------------------------->
Navigate  around components 
1- configure ethe Routes 
2- Add Router-Outlet 
3- Add Navigation Link Paths 

Router-outlet is required 
rounterLink for navigating 
routerLinkActive 
[routerLink] = "['/post' , index]"

 capturing paramter --------------->
 ActivatedRoute 
 inject the class on the constructor 
 this.route.paramMap.subscribe(value=>
 console.log(value))

 RXJS----------------------------->
 asynchronous programs
 Observable- continous observe a set of strings data 
 inside 
 ngnInit{
  const obsTest  = new  Observable(observer => {
    console.log("printed from observer);
  }).subscribe();

  //javascrit function with some features 

  call an observer by subscribe method 

   Returning in observable -> next("returned from observer);
   .subscribe(value=> 
       
       console.log(value)
   
   )
 }

 Use oF Observer---------------------------------------------------------------->
 in a noraml function - only one return 
 in observer- return as many function as we want
 .next multiple times 
 Synchronous and Asnchronous Programming --------------------------------------->

 .unsubscribe() -- close the subscribe 
 ng g module app-routing --module  app --flat      -- separate file for routing 
 Navigaet Programmatically --------------->
 this.router.navigate(['/posts' , 1 , 'postTitle']);
 ng g c fournotFour

 path: "**"
