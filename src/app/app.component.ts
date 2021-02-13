import { Component, OnInit } from '@angular/core';
import { IBannerCard } from './banner-card/banner-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  textList = ['Import', 'Export', 'Cargo'];
  cardProps: IBannerCard[] = mockBannerCard;
  changeText = () => {
    const dynaText = document.querySelector('.dyna-text');
    let i = 0;

    setInterval(() => {
      i += 1;
      if (i === this.textList.length) {
        i = 0;
      }
      dynaText.textContent = this.textList[i];
    }, 3000);
  };
  ngOnInit(): void {
    this.changeText();
  }
}

const mockBannerCard = [
  {
    image: 'flaticon-airplane',
    heading: 'AIR FREIGHT',
    desc: `We provide professional and
 reliable air freight import
and export services from
origins around the world. `,
  },
  {
    image: 'flaticon-vessel',
    heading: 'OCEAN FREIGHT',
    desc: `We handle shipping to and from all
parts of the world. Our sea freight
 import and export department
 handles your shipment and
also Break-bulk.`,
  },
  {
    image: 'flaticon-delivery',
    heading: 'CARGO EXPRESS',
    desc: `This service guarantees that
cargo enjoys priority retrieval
 at its destination, `,
  },
  {
    image: 'flaticon-home',
    heading: 'WAREHOUSING',
    desc: `We have  storage facilities for
storing goods in specifically designed environment
 . We can assure you that your
cargo will remain safe.`,
  },
];
