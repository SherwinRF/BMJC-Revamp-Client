import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { ResultService } from "../result.service";
import { StudentResults, Results } from "../../../../models/results.model";

@Component({
  selector: "app-pgresult",
  templateUrl: "./pgresult.component.html",
  styleUrls: ["./pgresult.component.css"],
})
export class PGResultComponent implements OnInit {
  theme: colorScheme;

  //result properties
  seat_result_table: boolean = false; //seat number table property
  result_error_message: string; //to store error messages on wrong input
  error_message: boolean = false; //to display error messages
  pg_result_table: boolean = false; //ug result table property
  department_button: boolean = true; //department button property
  result_seat_no: Results[] = []; //stores result from seat_number api
  Result: Results[] = []; //stores UG and PG result
  PG_Result: Results[] = []; //stores PG result
  course_result: Results; //stores UG result by course
  course_result_student: StudentResults[] = []; //stores students result by course
  course_result_student_temp: StudentResults[] = []; //stores temporary
  department: String[] = []; //stores unique departments

  //data table property
  dtOptions: any = {};
  constructor(
    private themeChanger: ThemeChangerService,
    private result: ResultService
  ) {
    //service function get results data from api
    result.getStoredResult().subscribe((data) => {
      this.Result = data;
      for (let items of this.Result) {
        //to get only ug results data
        if (items.course == "PG") {
          this.PG_Result.push(items);
        }
      }
    });
  }
  //service function to get results by seat number from backend
  get_seat_no(seat: string) {
    this.error_message = false;
    if (seat != undefined && seat != "") {
      this.result.getSeatNumber(seat).subscribe((data) => {
        if (data.length != 0) {
          if (data[0].course == "PG") {
            this.result_seat_no = data;
            this.pg_result_table = false;
            this.department_button = true;
            this.seat_result_table = false;
            setTimeout(() => {
              this.seat_result_table = true;
            }, 100);
          } else {
            this.result_error_message = "Please Enter a PG Seat Number";
            this.error_message = true;
          }
        } else {
          this.result_error_message = "Please Enter a Valid Seat Number";
          this.error_message = true;
        }
      });
    } else {
      this.result_error_message = "Please Enter a Seat Number";
      this.error_message = true;
    }
  }
  //to show results of all departments  from results dropdown
  fetchResult(dep) {
    this.error_message = false;
    this.pg_result_table = false;
    this.department = [];
    this.course_result = dep;
    this.course_result_student = this.course_result.student_results;
    this.course_result_student_temp = this.course_result_student; //stores the temp data for department filter
    for (let i = 0; i < this.course_result_student.length; i++) {
      this.department.push(this.course_result_student[i].department);
    }
    this.department = Array.from(new Set(this.department)); //to filter unique departments
    this.department_button = false;
    this.seat_result_table = false;
    setTimeout(() => {
      this.pg_result_table = true;
    }, 100);
  }
  //to show results by department
  department_result(dep_name) {
    this.error_message = false;
    this.pg_result_table = false;
    this.course_result_student = [];
    for (let items of this.course_result_student_temp) {
      if (items.department == dep_name) this.course_result_student.push(items);
    }
    setTimeout(() => {
      this.pg_result_table = true;
    }, 100);
  }
  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
    this.dtOptions = {
      pagingType: "full_numbers",
      columns: [
        {
          title: "Seat Number",
          data: "seat_number",
        },
        {
          title: "PRN",
          data: "prn",
        },
        {
          title: "Name",
          data: "name",
        },
        {
          title: "Department",
          data: "department",
        },
        {
          title: "Result",
          data: "result",
        },
      ],
      responsive: true,
    };
  }
}
