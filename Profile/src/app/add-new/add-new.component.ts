import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  url:any;
  //Angular 11, for stricter type
   msg = "";
   
   //selectFile(event) { //Angular 8
   selectFile(event: any) { //Angular 11, for stricter type
     if(!event.target.files[0] || event.target.files[0].length == 0) {
       this.msg = 'You must select an image';
       return;
     }
     
     var mimeType = event.target.files[0].type;
     
     
     if(event.target.files && event.target.files[0]){
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     
     reader.onload = (_event) => {
       this.msg = "";
       this.url = reader.result;
       
     }
   }
}
}