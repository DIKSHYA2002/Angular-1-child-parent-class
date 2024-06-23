import { Component } from "@angular/core";
@Component({
    selector:"app-navbar",
    templateUrl:"./navbar.component.html",
    styleUrls : ['./navbar.component.css']
})
export class NavbarComponent
{
    objArray : Array<any> =
    [
        {id:1 , ptitle:"post 1 "},
        {id:2 , ptitle:"post 2 "},
        {id:3 , ptitle:"post 3 "}
    ];

    //detect the changes and render it in reeal time 

    addNew()
    {
        this.objArray.push(
            {
                id:6,ptitle:"newly added post"
            }
        )
    }
    delete(param:any)
    {
        // let i = this.objArray.indexOf(param); we can pass the index directly rather than passing the whole object
         this.objArray.splice(param,1);

    }

}