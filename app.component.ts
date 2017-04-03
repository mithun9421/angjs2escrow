import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: `home/trigger.html`,
  styleUrls: ['css/trigger.css']
})

export class AppComponent  {

view1:boolean;
view2:boolean;
view3:boolean;

    selectOption = [
       "value1",
       "value2",
       "value3",
       
         
    ];

constructor(){
this.view1=true;
console.log('working');

}

onSelection(newVal:string){

console.log(newVal);

if(newVal=='value1'){
  console.log('view1 equal');
   this.view1=true;
   this.view2=false;
   this.view3=false;

}else if(newVal=='value2'||newVal=='value22'){
   console.log('view2 equal');
  this.view2=true;
  this.view1=false;
  this.view3=false;
}else if(newVal=='value3'){
   console.log('view3 equal');
  this.view3=true;
  this.view1=false;
  this.view2=false;
}




}



todayDate=new Date();



}
