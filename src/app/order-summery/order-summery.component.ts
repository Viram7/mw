import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summery',
  imports: [CommonModule],
  templateUrl: './order-summery.component.html',
  styleUrl: './order-summery.component.scss'
})
export class OrderSummeryComponent {
  items = [
    {
      title: 'IIM Kashipur Scholarship Test',
      price: 99,
      originalPrice: 500,
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/13ebd632-5415-41d6-85de-f760a295e03e.png' // replace with actual path
    }
  ];
}
