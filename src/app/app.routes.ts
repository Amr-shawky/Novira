import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Notfound } from './components/notfound/notfound';
import { Dashboard } from './components/student/dashboard/dashboard';
import { About } from './components/pages/about/about';
import { Contact } from './components/pages/contact/contact';
import { Courses } from './components/courses/courses';
import { Certificates } from './components/student/certificates/certificates';
import { CourseDetails } from './components/courses/course-details/course-details';
import { CourseVideoPlayer } from './components/courses/course-video-player/course-video-player';
import { CoursePlayer } from './components/courses/course-player/course-player';
import { Login } from './components/pages/login/login';
import { Signup } from './components/pages/signup/signup';

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
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'coursedetails/:id', component: CourseDetails },
  { path: 'coursevideo/:id', component: CourseVideoPlayer },
  { path: 'courseplayer/:id', component: CoursePlayer },
  { path: 'certificates', component: Certificates },
  { path: '**', component: Notfound },
];
