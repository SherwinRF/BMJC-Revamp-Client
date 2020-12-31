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
  seat_result_table: boolean = false;
  pg_result_table: boolean = false;
  result_seat_no: any = [];
  Result: Results[] = [];
  PG_Result: Results[] = [];
  dtOptions: any = {};
  constructor(
    private themeChanger: ThemeChangerService,
    private result: ResultService
  ) {
    result.getStoredResult().subscribe((data) => {
      this.Result = data;
      for (let items of this.Result) {
        if (items.course == "PG") {
          this.PG_Result.push(items);
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
