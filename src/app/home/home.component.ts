import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public productDetailsList:any = [];
  public slides:any = [];
  public clothesList:any = [];
  constructor (private sellerService: SellerService){}

  ngOnInit(){
    this.sellerService.getAllProductDetails().subscribe((data)=>{
      this.productDetailsList = data;
      for(let i = 0; i < this.productDetailsList.length; i++){
        if(this.productDetailsList[i].category.name == 'Electronics'){
          this.slides.push(this.productDetailsList[i]);
        }else if(this.productDetailsList[i].category.name == 'Clothes'){
          this.clothesList.push(this.productDetailsList[i]);
        }
      }
    })
  }

  // slides = [
  //   {img: "https://api.lorem.space/image/fashion?w=640&h=480&r=2811"},
  //   {img: "https://api.lorem.space/image/fashion?w=640&h=480&r=2811"},
  //   {img: "https://api.lorem.space/image/furniture?w=640&h=480&r=84"},
  //   {img: "https://api.lorem.space/image/shoes?w=640&h=480&r=2390"}
  // ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 4};
  
  addSlide() {
    this.slides.push({img: "https://api.lorem.space/image/furniture?w=640&h=480&r=84"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  
}
