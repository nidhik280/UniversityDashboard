import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  computerScienceCourses = [
    { title: 'Bsc. Computer Science ' },
    { title: 'Msc. Computer Science' }
  ];

  engineeringCourses = [
    { title: 'BTech Mechanical Engineering ' },
    { title: 'BTech Electrical Engineering ' },
    { title: 'BTech Computer Science & Engineering' },
    { title: 'BTech Electronics Engineering' }
  ];

  ITCourses=[
    {title: 'Bsc. IT'},
    {title: 'Msc. IT'}
  ];

Mathematics=[
{ title:'Bsc. Mathematics' },
{ title:'Msc. Mathematics' }
];

English=[
  { title:'Bsc. English' },
  { title:'Msc. English' }
  ];

  Commerce=[
    { title:'B.com' },
    { title:'M.Com' },
    { title:'BBA' },
    { title:'MBA' },
    ];

}
  
