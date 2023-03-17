import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { sellerData } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http : HttpClient) { }

  postSellerRegistrationData(data:sellerData){
    return this.http.post('http://localhost:3000/seller/', data);
  }
  getAllCategoryList(){
    return this.http.get('https://api.escuelajs.co/api/v1/categories');
  }
  // getAllCategoryList(){
  //   return this.http.get('http://localhost:3000/categories');
  // }

}
