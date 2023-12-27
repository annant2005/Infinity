import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType:string="default";
  sellerName:string="";
  sellerData:string='';
  
  constructor(private route:Router){
    
  }
  ngOnInit():void{
   
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn("seller Area in")
          this.menuType="seller"
          if(localStorage.getItem('seller')){
            let sellerStorage=localStorage.getItem('seller');
            let sellerData=sellerStorage &&JSON.parse(sellerStorage)[0];
            this.sellerName=sellerData.name;
        }
       } else{
          console.warn("outside Seller area")
          this.menuType='default'
        }
      }
    })

  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/seller-auth']);
  }

}
