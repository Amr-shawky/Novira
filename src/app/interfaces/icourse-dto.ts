export interface ICourseDto {
  id: number;
  courseTitle: string;
  description: string;
  instructorName: string;
  categoryName: string;
  createdDate: string; // ISO date string
  thumbnailURL: string;
  totalAmount: number;
  discountStartDate: string;
  discountEndDate: string;
  discountValue: number;
  isDiscountValid: boolean;
  totalAmountAfterDiscount: number;
  subLessons: [];
}
