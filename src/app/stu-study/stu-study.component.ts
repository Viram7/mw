import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-stu-study',
  imports: [CommonModule,RouterLink],
  templateUrl: './stu-study.component.html',
  styleUrl: './stu-study.component.scss'
})
export class StuStudyComponent {


  courses = [
    {
      title: 'Online BCA For Dropper JEE Students',
      subtitle: 'Online BCA Degree for Dropper JEE Students',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c45b53a2-4d7a-4e65-96fb-ef57cb48f6c2.png',
      startDate: '28 Feb, 2025',
      endDate: '16 Dec, 2027',
      info: '100K+ | Pay for up to 24 Months! | 3 Years & many more'
    },
    {
      title: 'Online B.Com For CA Aspirants',
      subtitle: 'Online B.Com Degree for CA Students',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/91f8d964-168c-4227-ac75-00dbfd670664.png',
      startDate: '28 Feb, 2025',
      endDate: '30 Dec, 2028',
      info: '100 Universities | 100K+ | EMI & many more'
    },
    {
      title: 'Career Mahakumbh (UG)',
      subtitle: 'Register for Free Career Counselling (After Class)',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/f22976bb-a61f-4c62-835c-2399265fc705.png',
      startDate: '05 Apr, 2025',
      endDate: '30 Apr, 2025',
      info: '100 Universities | 100K+ | EMI & many more'
    }

  ];


  quickAccessItems = [
    {
      title: 'My Batches',
      description: 'View list of batches in which you are enrolled',
      icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/f145607d-ce81-4512-a415-482360e74bd1.png',
      link: 'my_batch'
    },
    {
      title: 'My History',
      description: 'View your recent learning here',
      icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d5250d2e-e8b0-43f8-bb6f-91c21d97f51a.png',
      link: '/my-history'
    },
    {
      title: 'My Doubts',
      description: 'View the list of your asked doubts',
      icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/e9d63833-cd40-4b98-ac8d-d51f30b4766e.png',
      link: '/my-doubts'
    },
    {
      title: 'Dashboard',
      description: 'Track your progress through detailed performance',
      icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/ebaf9d40-6e18-4fd5-87e7-bfd03bc7c7b7.png',
      link: '/dashboard'
    },
    {
      title: 'Bookmarks',
      description: 'View the list of your saved questions',
      icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d1d0061b-8499-4386-9e39-b93b7393343b.svg',
      link: '/bookmarks'
    }
  ];

constructor(private router: Router,private route :ActivatedRoute) { }

  navigate(link: string) {
    this.router.navigate(['../' + link], { relativeTo: this.route });
  // this.router.navigate([link]);
  }


}

