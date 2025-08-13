import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Notfound } from './components/notfound/notfound';
import { Dashboard } from './components/student/dashboard/dashboard';
import { About } from './components/pages/about/about';
import { Contact } from './components/pages/contact/contact';
import { Courses } from './components/courses/courses';
import { Certificates } from './components/student/certificates/certificates';
import { CourseDetails } from './components/courses/course-details/course-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'profile', component: Dashboard },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  {
    path: 'courses',
    component: Courses
  },
  { path: 'coursedetails/:id', component: CourseDetails },
  { path: 'certificates', component: Certificates },
  { path: '**', component: Notfound },
];
