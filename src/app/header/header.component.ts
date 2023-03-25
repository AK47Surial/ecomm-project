import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  faCartShopping = faCartShopping;
  faHome = faHome;
  faPerson = faPerson;
  faUserLock = faUserLock;
  faSearch = faSearch;
  
  public allCategoryList:any = [];
  public isMenuListAvailable:boolean = false;
  public headerMenuList:Array<any>=[
    {
      "id" : 1,
      "icon" : faHome,
      "label" : "Home",
      "path" : '/',
      "visible" : true,
    },
    {
      "id" : 2,
      "icon" : faPerson,
      "label" : "Seller",
      "path" : '/seller-auth',
      "visible" : true,
    },
    {
      "id" : 3,
      "icon" : faUserLock,
      "label" : "Login",
      "path" : '/login',
      "visible" : true,
    },
    {
      "id" : 4,
      "icon" : faCartShopping,
      "label" : "Cart(0)",
      "path" : '/cart',
      "visible" : true,
    },
  ]
  constructor( private sellerService :  SellerService ) {}

  ngOnInit(){    
    this.getAllCategoryList();

  }

  getAllCategoryList(){
    this.sellerService.getAllCategoryList().subscribe((data)=>{
      this.allCategoryList = data;
      console.log(this.allCategoryList);
      this.isMenuListAvailable = true;
    })
  }

  ngOnDestroy(){
    this.headerMenuList = [];
  }

}
