import { Component ,OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({ // component-decorator
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  title:string = "list of posts"; //data binding-- can do artihmetic operaton too string interpolation
  messagePost :string = 'Message Post'; //cannot access in app-component

  @Input()  fromParent!: string;

  @Output() messageEvent = new EventEmitter<string>();

  postParentMessage:string = "Message coming from post parent";
  childMessage:string = 'From child post';

  outputChildMessage :string = "Message from child via output";
 constructor(){}
 //callback lifecycle after the particular componnent is initialisd fully in browser
 ngOnInit(): void {

 }

 sendMessage()
 {
   //console.log("button click");
   this.messageEvent.emit(this.outputChildMessage);
 }

}
