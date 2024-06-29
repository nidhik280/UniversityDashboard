import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers = [
    {
      name: 'Mrs. Sangeeta',
      subject: 'Mathematics',
      profile: 'Sangeeta has a Ph.D. in Mathematics and over 10 years of teaching experience.'
    },
    {
      name: 'Ms. Janvi',
      subject: 'Physics',
      profile: 'Janvi has a Master\'s degree in MCA with numerous publications and 8 years of teaching experience.'
    },
    {
      name: 'Mrs. Pallavi',
      subject: 'Chemistry',
      profile: 'Pallavi has a Master\'s degree in Chemistry and has been teaching for 5 years.'
    },
    {
      name: 'Ms. Shivani',
      subject: 'Computer Science',
      profile: 'Pallavi has a Master\'s degree in Msc.Computer Science and has been teaching for 5 years.'
    },
    {
      name: 'Dr. Tarun',
      subject: 'CSE',
      profile: 'Tarun has a Master\'s degree in PhD with numerous publications and has been teaching for 15 years.'
    },
    {
      name: 'Mr. Dhruv',
      subject: 'IT',
      profile: 'Dhruv has a Master\'s degree in Msc. IT and has been teaching for 8 years.'
    },
    {
      name: 'Mr. Rishabh',
      subject: 'Commerce',
      profile: 'Rishabh has a Master\'s degree in M.Com and has been teaching for 5 years.'
    },
    {
      name: 'Mrs. Geetika',
      subject: 'Computer Applications',
      profile: 'Geetika has a Master\'s degree in MCA and has been teaching for 5 years.'
    },
    {
      name: 'Mr. Vikas',
      subject: 'Computer Science',
      profile: 'Vikas has a Master\'s degree in Msc. Computer Science and has been teaching for 3 years.'
    },
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
