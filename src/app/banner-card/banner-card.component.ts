import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss'],
})
export class BannerCardComponent implements OnInit {
  @Input() bannerProp: IBannerCard;
  // banner: IBannerCard;
  constructor() {
    // this.bannerProp = {
    //   image: 'assets/images/icons/airplane 1.svg',
    //   desc: 'Description',
    //   heading: 'heading',
    // };
  }

  ngOnInit(): void {}
}

export interface IBannerCard {
  image: string;
  heading: string;
  desc: string;
}
