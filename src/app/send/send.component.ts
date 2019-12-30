import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
message:any;
url:any;
mychat=" ";
  constructor() { }

  ngOnInit() {
    (<HTMLElement>document.getElementById("cb")).hidden=true;
    (<HTMLElement>document.getElementById("min")).hidden=true;
    (<HTMLElement>document.getElementById("max")).hidden=true;
    setTimeout(()=>{
      (<HTMLElement>document.getElementById("cb")).hidden=false;
      (<HTMLElement>document.getElementById("min")).hidden=false;
      this.message="hello";
      this.url="https://springcb.herokuapp.com//send/"+this.message;
      fetch(this.url,{
        method:"GET",
        headers:{
          "content-type":"application/json"
        }
      }).then(res=>res.json()).then(data=>{
        console.log("got it");
        console.log(data[0]);
        let tr2="<tr><td class='shadow-sm rounded' style='background-color: rgb(118, 166, 255);border-radius:10px'>"+"&emsp;"+data[0]+"&emsp;"+"</td><td>&emsp;</td></tr>";
        console.log(tr2);
        this.mychat=this.mychat+tr2;
        (<HTMLOutputElement>document.getElementById("tab")).innerHTML=this.mychat;
        (<HTMLOutputElement>document.getElementById("msg")).value="";
    })
    },4000)
   
}

  send(){
    
    (<HTMLOutputElement>document.getElementById("tab")).innerHTML=this.mychat;
    this.message=(<HTMLInputElement>document.getElementById("msg")).value;
    console.log(this.message);
    let tr1="<tr style='text-align:right;'><td>&nbsp;&nbsp;&nbsp;</td><td class='shadow-sm rounded' style='background-color:rgb(138, 216, 138); border-radius:10px'>"+"&emsp;"+this.message+"&emsp;"+"</td></tr>";
    (<HTMLOutputElement>document.getElementById("tab")).innerHTML=tr1;
    this.url="https://springcb.herokuapp.com/send/"+this.message;
    fetch(this.url,{
      method:"GET",
      headers:{
        "content-type":"application/json"
      }
    }).then(res=>res.json()).then(data=>{
      console.log("got it");
      console.log(data[0]);
      let tr2="<tr><td class='shadow-sm rounded' style='background-color: rgb(118, 166, 255);border-radius:10px'>"+"&emsp;"+data[0]+"&emsp;"+"</td><td>&emsp;</td></tr>";
      console.log(tr2);
      this.mychat=this.mychat+tr1+tr2;
      (<HTMLOutputElement>document.getElementById("tab")).innerHTML=this.mychat;
      (<HTMLOutputElement>document.getElementById("msg")).value="";
      (<HTMLElement>document.getElementById("s")).scrollTo(0,3000000);
    })
  }

  minimize(){
    (<HTMLElement>document.getElementById("cb")).hidden=true;
    (<HTMLElement>document.getElementById("min")).hidden=true;
    (<HTMLElement>document.getElementById("max")).hidden=false;
  }

  maximize(){
    (<HTMLElement>document.getElementById("cb")).hidden=false;
    (<HTMLElement>document.getElementById("max")).hidden=true;
    (<HTMLElement>document.getElementById("min")).hidden=false;
  }

}
