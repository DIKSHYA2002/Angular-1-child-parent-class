import { Component , ViewChild , AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  parentMessage:string = 'Mesage from parent component';
  fromOutputChildMessage!: string; //has child values

  @ViewChild(PostComponent) childComp:any;


  constructor()
  {
    //console.log(this.childComp); //doesnt work as not initialised yet 
  }

  ngAfterViewInit(): void {
      console.log(this.childComp);
  }
  title = 'test'; //dynamically use  it in html file
  myObject = {
    color: "red",
    material :"soft"
  }

  receiveMessage($event:any)
  {
    //console.log($event);
    this.fromOutputChildMessage = $event;
  }

  //myArr = ['a' ,'e','i'];
  myArr = [];
 //function
  goBack():void{}
}
