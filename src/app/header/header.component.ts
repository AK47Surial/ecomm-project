import { HttpClient } from '@angular/common/http';
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
  selectedTab: string= "";
  
  public allCategoryList:any;
  public isMenuListAvailable:boolean = false;

  constructor(
    private sellerService :  SellerService,
    private http :  HttpClient    
  ) {}

  ngOnInit(){    
    this.allCategoryList = this.http.get('http://localhost:3000/categories').subscribe((Response: any) => {}
    );
    this.getAllCategoryList();
  }

  getAllCategoryList(){
    this.sellerService.getAllCategoryList().subscribe((response:any)=>{
      this.isMenuListAvailable = true;
      this.allCategoryList = response;
    })
  }

  isActiceMenu(item:string){
    this.selectedTab = item;
  }
}
