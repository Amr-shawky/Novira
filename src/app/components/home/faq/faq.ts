import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class FAQ {
  faqs = [
    { question: 'How do I enroll in a course?', answer: 'Simply sign up and choose your preferred course to start learning immediately.' },
    { question: 'Do you offer certificates?', answer: 'Yes! Upon successful completion, you will receive a verified digital certificate.' },
    { question: 'Are the courses self-paced?', answer: 'Yes, you can learn at your own pace and revisit lessons anytime.' },
    { question: 'Can I access the courses offline?', answer: 'Currently, our courses are only available online, but we are working on offline access.' }
  ];
  
  openIndex: number | null = null;

  toggleFAQ(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
