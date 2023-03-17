import { Component } from '@angular/core';
import { sellerData } from '../dataType';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  public responseObj:any = {};
  constructor(
    private sellerService :  SellerService,
    private router :  Router    
    ) {}

  ngOnIntit():void {}

  createRegistration(data:sellerData):void{
    let responsePopup = {
      "status" : false,
      "message" : ""
    };
    this.sellerService.postSellerRegistrationData(data).subscribe((response)=>{
      if(response){
        responsePopup.status = true;
        responsePopup.message = 'Success';
        this.responseObj = responsePopup;
        setTimeout(()=>{
          responsePopup.status = false;
          responsePopup.message = '';
          this.responseObj = responsePopup;
          this.router.navigate(['seller-home']);
        },2000);
      }else{
        responsePopup.status = false;
        responsePopup.message = 'Failed';
        this.responseObj = responsePopup;
        setTimeout(()=>{
          responsePopup.status = false;
          responsePopup.message = '';
          this.responseObj = responsePopup;
        },2000);
      }
    });
  }
}
