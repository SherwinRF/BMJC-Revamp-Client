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

  //Column Chart
  passcount: any;
  failcount: any;
  failatktcount: any;
  withheldcount: any;
  charts: boolean = false;
  optionsbar = {};
  col = ["Result", "Result", { role: "style" }];
  datacolumn: any[] = [];

  //Pie Chart Prooperty
  title: String;
  data: any[] = [];
  type = "PieChart";
  options = {
    colors: ["green", "red", "orange", "blue"],
  };
  width;
  height;

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
    this.charts = false;
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
    this.chartCount(this.course_result_student);
    setTimeout(() => {
      this.pg_result_table = true;
    }, 100);
  }

  //Function for counting pass  and fail for charts
  chartCount(course_result_student) {
    this.passcount = 0;
    this.failcount = 0;
    this.failatktcount = 0;
    this.withheldcount = 0;
    for (let i = 0; i < this.course_result_student.length; i++) {
      if (course_result_student[i].result == "PASS") {
        this.passcount++;
      }
      if (course_result_student[i].result == "FAIL") {
        this.failcount++;
      }
      if (course_result_student[i].result == "FAILS-ATKT") {
        this.failatktcount++;
      }
      if (course_result_student[i].result == "WITHHELD") {
        this.withheldcount++;
      }
    }
    this.charts = true;
    this.drawchart();
    //For Column Chart
    this.optionsbar = {
      title: this.course_result_student[0].department + " Result Statictics",
      legend: "none",
    };
    this.title = this.course_result_student[0].department + " Result Piechart";
    this.datacolumn = [
      ["PASS", parseInt(this.passcount), "green"],
      ["FAIL", parseInt(this.failcount), "red"],
      ["FAILS-ATKT", parseInt(this.failatktcount), "orange"],
      ["WITH-HELD", parseInt(this.withheldcount), "blue"],
    ];
    //For Pie Chart
    this.data = [
      ["PASS", parseInt(this.passcount)],
      ["FAIL", parseInt(this.failcount)],
      ["FAILS-ATKT", parseInt(this.failatktcount)],
      ["WITH-HELD", parseInt(this.withheldcount)],
    ];
  }

  //to draw chart on different screens
  drawchart() {
    if (document.documentElement.clientWidth >= 992) {
      this.width = 500;
      this.height = 400;
    }
    if (
      document.documentElement.clientWidth <= 991 &&
      document.documentElement.clientWidth >= 768
    ) {
      this.width = 400;
      this.height = 400;
    }
    if (
      document.documentElement.clientWidth <= 767 &&
      document.documentElement.clientWidth >= 575
    ) {
      this.width = 350;
      this.height = 350;
    }
    if (
      document.documentElement.clientWidth <= 574 &&
      document.documentElement.clientWidth >= 479
    ) {
      this.width = 300;
      this.height = 300;
    }
    if (document.documentElement.clientWidth <= 480) {
      this.width = 253;
      this.height = 253;
    }
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
