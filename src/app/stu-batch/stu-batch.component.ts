import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-stu-batch',
  imports: [CommonModule, FormsModule,SearchFilterPipe,RouterLink],
  templateUrl: './stu-batch.component.html',
  styleUrl: './stu-batch.component.scss'
})
export class StuBatchComponent {

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
    },
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
    },
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
    },
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
term: any;
}
