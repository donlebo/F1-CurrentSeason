import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/interfaces/drivers';

@Component({
  selector: 'app-user-standing',
  templateUrl: './user-standing.component.html',
  styleUrls: ['./user-standing.component.css']
})
export class UserStandingComponent implements OnInit{

  standings$!: Observable<any[]>;
  standings!: any[];
  displayedColumns: string[] = ['position', 'teamName', 'points', 'info'];
  dataSource!: MatTableDataSource<any>;
  show: boolean = false;

  constructor(private db: AngularFireDatabase, private http: HttpClient) { }

  ngOnInit(): void {
    this.show = true;
    setTimeout(()=>{
      this.standings$ = this.db.list<any>('/teams').valueChanges();
      this.standings$.subscribe(data => {
        this.standings = data;
        this.http.get<RootObject>(`https://ergast.com/api/f1/2023/driverStandings.json`).subscribe(res => {
          const driverStandings = res.MRData.StandingsTable.StandingsLists[0].DriverStandings;

          this.standings.forEach((team) => {
            team.currentPoints = team.totalPoints;
          });

          this.standings.forEach((team) => {
            const driver = driverStandings.find((driver: { Driver: { driverId: any; }; }) => driver.Driver.driverId === team.driverId);
            if (driver) {
              const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
              const driverPosition = driverStandings.indexOf(driver);
              team.currentPoints += points[driverPosition];
              team.totalPoints = team.currentPoints + points[driverPosition];
            }
          });

          this.standings.sort((a, b) => b.totalPoints - a.totalPoints);
          this.standings.forEach((team, index) => {
            team.position = index + 1;
          });
          this.dataSource = new MatTableDataSource(this.standings);
          console.log(this.standings);
        });
      });
      this.show=false
    }, 2000);
    return;
  }

  /* standings$!: Observable<any[]>;
  standings!: any[];
  displayedColumns: string[] = ['position', 'teamName', 'points', 'info'];
  dataSource!: MatTableDataSource<any>;
  show: boolean = false;

  constructor(private db: AngularFireDatabase, private http: HttpClient) { }

  ngOnInit(): void {
    this.show = true;
    setTimeout(()=>{
      this.standings$ = this.db.list<any>('/teams').valueChanges();
      this.standings$.subscribe(data => {
        this.standings = data;
        this.http.get<RootObject>(`https://ergast.com/api/f1/2023/driverStandings.json`).subscribe(res => {
          const driverStandings = res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          this.standings.forEach((team) => {
            const driver = driverStandings.find((driver: { Driver: { driverId: any; }; }) => driver.Driver.driverId === team.driverId);
            if (driver) {
              const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
              const driverPosition = driverStandings.indexOf(driver);
              team.totalPoints += points[driverPosition];
            }
          });
          this.standings.sort((a, b) => b.totalPoints - a.totalPoints);
          this.standings.forEach((team, index) => {
            team.position = index + 1;
          });
          this.dataSource = new MatTableDataSource(this.standings);
          console.log(this.standings);
        });
      });
      this.show=false
    }, 2000);
    return;
  } */
}
