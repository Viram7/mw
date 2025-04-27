import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-batch',
  imports: [CommonModule],
  templateUrl: './my-batch.component.html',
  styleUrl: './my-batch.component.scss'
})
export class MyBatchComponent {



  selectedType = 'Paid'; // 'Paid' or 'Free'
  selectedTab = 'All'; // 'All' or 'Expired'

  batches = [
    {
      title: 'MCA (Online)',
      type: 'Paid',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/0df789ce-e950-45cb-9bf6-eeffd5ec47f7.png',
      language: 'Hinglish',
      isNew: true,
      expired: false
    },
    {
      title: 'BARC 2024 Question Practice',
      type: 'Paid',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/0df789ce-e950-45cb-9bf6-eeffd5ec47f7.png',
      language: 'Hinglish',
      isNew: true,
      expired: true
    },
    {
      title: 'Post GATE 2024 Guidance',
      type: 'Free',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/f9b36be1-c8b6-4071-8703-ab743ce242b6.jpg',
      language: 'Hinglish',
      isNew: true,
      expired: true
    }
  ];

  filteredBatches() {
    return this.batches.filter(batch =>
      batch.type === this.selectedType &&
      (this.selectedTab === 'All' || (this.selectedTab === 'Expired' && batch.expired))
    );
  }

  constructor (private router: Router,private route :ActivatedRoute) { }

  openBatch(){

    this.router.navigate(['../cource_study'],{relativeTo: this.route})

  }
}
