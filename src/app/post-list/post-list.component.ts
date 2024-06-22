import { Component ,OnInit , Input ,Output} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit{

  userName: string = "";
  @Input() fromPostParent! :string
  constructor(){
  }
  buttonClick()
  {
    console.log("postlist click button");
  }
  onKeyup()
  {
    console.log(this.userName); 
  }

  ngOnInit(): void {
      
  }
}
