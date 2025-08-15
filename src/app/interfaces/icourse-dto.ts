export interface ICourseDto {
    id: number;
    courseTitle: string;
    description: string;
    instructorName: string;
    categoryName: string;
    createdDate: string;
    thumbnailURL: string;
    totalAmount: number;
    duration: number;
    level: string;
    discountStartDate: string;
    discountEndDate: string;
    discountValue: number;
    isDiscountValid: boolean;
    totalAmountAfterDiscount: number;
    subLessons: any[]; // Replace 'any' with ISubLessonDto[] if you define ISubLessonDto
}

// export interface ISubLessonDto {
//   title: string;
//   description: string;
//   createdDate: string; // ISO date string
//   lessons: ILessonDto[];
// }

// export interface ILessonDto {
//   lessonTitle: string;
//   content: string;
//   lessonOrder: number;
//   lessonDescription: string;
// }
