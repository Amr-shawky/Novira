import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-filter-sidebar',
  imports: [FormsModule],
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.css'
})
export class FilterSidebar {
  @Input() filters: any = {      // 👈 أضفنا Input هنا
    search: '',
    category: '',
    level: '',
    duration: 20
  };
  
 @Output() filtersChanged = new EventEmitter<any>();

  categories = ['Web Development', 'Design', 'Data Science', 'Marketing'];
  levels = ['Beginner', 'Intermediate', 'Advanced'];

  onFiltersChange() {
    this.filtersChanged.emit({ ...this.filters });
  }

  resetFilters() {
    this.filters = {
      search: '',
      category: '',
      level: '',
      duration: 20
    };
    this.onFiltersChange();
  }
}
