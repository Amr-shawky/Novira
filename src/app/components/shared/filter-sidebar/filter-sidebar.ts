import { IcategoryDTO } from './../../../interfaces/icategory-dto';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { CategoryServices } from '../../../services/category/category-services';
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
    level: 'all',
    duration: 20
  };
  categoriesobj: IcategoryDTO[] = [];
  
  @Output() filtersChanged = new EventEmitter<any>();
  constructor(private categoryService: CategoryServices) {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categoriesobj = data;
      console.log('Categories loaded:', this.categoriesobj);
    });
 }
  categories = this.categoriesobj.map(category => category.categoryName);

  levels = ['Beginner', 'Intermediate', 'Advanced','all'];

  onFiltersChange() {
    this.filtersChanged.emit({ ...this.filters });
  }

  resetFilters() {
    this.filters = {
      search: '',
      category: '',
      level: 'all',
      duration: 0
    };
    this.onFiltersChange();
  }
}
