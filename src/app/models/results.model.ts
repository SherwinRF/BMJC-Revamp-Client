export class Results {
  _id: string;
  course: string;
  year: string;
  batch: string;
  exam: string;
  student_results: StudentResults[];
  year_id: string;
}
export class ResultBySeatNumber {
  _id: string;
  course: string;
  year: string;
  batch: string;
  exam: string;
  student_results: StudentResults;
  year_id: string;
}
export class StudentResults {
  _id: string;
  seat_number: string;
  prn: string;
  name: string;
  result: string;
  department: string;
}
