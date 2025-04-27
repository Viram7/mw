import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-batch-details-sub',
  imports: [RouterLink,CommonModule],
  templateUrl: './batch-details-sub.component.html',
  styleUrl: './batch-details-sub.component.scss'
})
export class BatchDetailsSubComponent implements OnInit{

  batchInfo = {
    durationStart: '14 April 2025',
    durationEnd: '30 Jan 2026',
    validity: '30 June 2027',
    features: [
      'Online lectures',
      'DPPs and Test With Solutions'
    ]
  };
  course ={
    title: 'Arjuna NEET 2026',
    image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c89c4a74-374c-44e5-9041-ffe88aa3746a.jpg',
    language: 'Hinglish',
    isNew: true,
    price: 4999,
    originalPrice: 5600,
    discount: '11%',
    startDate: '14 Apr, 2025',
    endDate: '30 Jun, 2027',
    tag: 'ONLINE',
    isDark: false,
  }



  teachers = [
    {
      name: "Samapti Sinha ma'am",
      subject: "Zoology",
      experience: "9+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/14d60998-abf0-474b-a051-da57ed829181.png'
    },
    {
      name: "Sudhanshu Kumar sir",
      subject: "Physical Chemistry",
      experience: "9+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/8dc2446a-5daa-4e53-b767-ab41d5f07ef2.png'
    },
    {
      name: "Amit Mahajan sir",
      subject: "Chemistry",
      experience: "23+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/875d6886-f8d7-461f-acd0-54f3ca24aae5.png'
    },
    {
      name: "Samapti Sinha ma'am",
      subject: "Zoology",
      experience: "9+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/14d60998-abf0-474b-a051-da57ed829181.png'
    },
    {
      name: "Sudhanshu Kumar sir",
      subject: "Physical Chemistry",
      experience: "9+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/8dc2446a-5daa-4e53-b767-ab41d5f07ef2.png'
    },
    {
      name: "Amit Mahajan sir",
      subject: "Chemistry",
      experience: "23+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/875d6886-f8d7-461f-acd0-54f3ca24aae5.png'
    },
    {
      name: "Samapti Sinha ma'am",
      subject: "Zoology",
      experience: "9+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/14d60998-abf0-474b-a051-da57ed829181.png'
    },
    {
      name: "Sudhanshu Kumar sir",
      subject: "Physical Chemistry",
      experience: "9+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/8dc2446a-5daa-4e53-b767-ab41d5f07ef2.png'
    },
    {
      name: "Amit Mahajan sir",
      subject: "Chemistry",
      experience: "23+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/875d6886-f8d7-461f-acd0-54f3ca24aae5.png'
    },
    {
      name: "Samapti Sinha ma'am",
      subject: "Zoology",
      experience: "9+ Years Exp",
      image: 'assets/teacher1.png'
    },
    {
      name: "Sudhanshu Kumar sir",
      subject: "Physical Chemistry",
      experience: "9+ Years Exp",
      image: 'assets/teacher2.png'
    },
    {
      name: "Amit Mahajan sir",
      subject: "Chemistry",
      experience: "23+ Years Exp",
      image: 'assets/teacher3.png'
    }
  ];

  groupedTeachers: any[] = [];

  ngOnInit(): void {
    this.groupTeachers();
  }

  groupTeachers() {
    const groupSize = 3;
    for (let i = 0; i < this.teachers.length; i += groupSize) {
      this.groupedTeachers.push(this.teachers.slice(i, i + groupSize));
    }
  }
}
