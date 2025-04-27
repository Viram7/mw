import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-purchase',
  imports: [CommonModule,RouterLink],
  templateUrl: './my-purchase.component.html',
  styleUrl: './my-purchase.component.scss'
})
export class MyPurchaseComponent {

  my_purchase = [
    {
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/13ebd632-5415-41d6-85de-f760a295e03e.png', // replace with your correct path
      status: 'FAILED',
      title: 'IIM Kashipur Scholarship Test',
      date: new Date('2025-04-25'),
      price: '₹99'
    },
    {
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/0df789ce-e950-45cb-9bf6-eeffd5ec47f7.png', // replace with your correct path
      status: 'SUCCESS',
      title: 'MCA (Online)',
      date: new Date('2024-10-02'),
      price: 'Free'
    }
  ];


  openLink(){

  }

}
