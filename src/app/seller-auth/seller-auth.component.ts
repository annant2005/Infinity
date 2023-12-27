import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'; 
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  isLoginError: any;
  constructor(private seller:SellerService, private router:Router){}
  showLogin=false;
  authError:String='';
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  SignUp(data:SignUp):void{
    
    this.seller.userSignUp(data)
      }
  Login(data:SignUp):void{
    
    this.seller.userlogin(data);
    
  
  }
  openLogin(){
    this.showLogin=true

  }
  openSignUp(){
    this.showLogin=false

  }

  }

