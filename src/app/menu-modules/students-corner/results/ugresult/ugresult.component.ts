import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { StudentResults, Results } from "../../../../models/results.model";
import { ResultService } from "../result.service";

@Component({
  selector: "app-ugresult",
  templateUrl: "./ugresult.component.html",
  styleUrls: ["./ugresult.component.css"],
})
export class UGResultComponent implements OnInit {
  theme: colorScheme;
  //result properties
  seat_result_table: boolean = false;
  ug_result_table: boolean = false;
  result_seat_no: any = [];
  Result: Results[] = [];
  UG_Result: Results[] = [];
  //data table property
  dtOptions: any = {};
  constructor(
    private themeChanger: ThemeChangerService,
    private result: ResultService
  ) {
    result.getStoredResult().subscribe((data) => {
      this.Result = data;
      for (let items of this.Result) {
        if (items.course == "UG") {
          this.UG_Result.push(items);
        }
      }
    });
  }
  get_seat_no(seat: string) {
    if (seat != undefined && seat != "") {
      this.result.getSeatNumber(seat).subscribe((data) => {
        this.seat_result_table = false;
        this.result_seat_no = data;
        if (this.result_seat_no.length != 0) {
          this.seat_result_table = true;
          console.log(this.result_seat_no);
        }
      });
    } else alert("Please Enter Seat Number");
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
