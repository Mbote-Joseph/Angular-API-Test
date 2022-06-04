import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
@Component({
  selector: "app-football-matches",
  templateUrl: "./football-matches.component.html",
  styleUrls: ["./football-matches.component.scss"],
})
export class FootballMatchesComponent implements OnInit {
  years: number[] = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
  selectedYear: number;
  URL = "https://jsonmock.hackerrank.com/api/football_competitions?year";
  matches: any[] = [];

  loadYear(year: number) {
    this.selectedYear = year;
    this.http
      .get(this.URL + "=" + year)
      .pipe(
        tap((data) => {
          this.matches = data["data"];
        })
      )
      .subscribe();
  }

  constructor(private http: HttpClient) {
    if (this.selectedYear === undefined) {
      this.loadYear(2011);
    } else if (this.selectedYear === 2011) {
      this.loadYear(2011);
    } else if (this.selectedYear === 2012) {
      this.loadYear(2012);
    } else if (this.selectedYear === 2013) {
      this.loadYear(2013);
    } else if (this.selectedYear === 2014) {
      this.loadYear(2014);
    } else if (this.selectedYear === 2015) {
      this.loadYear(2015);
    } else if (this.selectedYear === 2016) {
      this.loadYear(2016);
    } else if (this.selectedYear === 2017) {
      this.loadYear(2017);
    }
  }

  ngOnInit(): void {}
}
export interface Match {
  name: string;
  winner: string;
}

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}
interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}
