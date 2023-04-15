import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultsService } from 'src/app/providers/results.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

type Points = {
  [key: number]: number;
}

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit{

  squadForm!: FormGroup;
  drivers!: any[];
  constructorStandings: any;
  isDisabled = false;
  show: boolean = false;

  constructor(private fb: FormBuilder, private results: ResultsService, private db: AngularFireDatabase, public router: Router) { }

  teamName = localStorage.getItem('teamName');

  ngOnInit(): void {
    this.show = true;
    setTimeout(()=>{
      this.squadForm = this.fb.group({
        teamName: [this.teamName, Validators.required],
        driver1: ['Choose captain', Validators.required],
        driver2: ['Choose pilot', Validators.required],
        driver3: ['Choose pilot', Validators.required]
      });
      this.results.getDrivers().subscribe(drivers => {
        this.drivers = drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        console.log(this.drivers);
      });
      this.show=false
    }, 2000);
    return;
  }

  submitForm() {
    const squad = this.squadForm.value;

    const pointsByPosition: Points = {
      1: 25,
      2: 18,
      3: 15,
      4: 12,
      5: 10,
      6: 8,
      7: 6,
      8: 4,
      9: 2,
      10: 1,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
    };
    let totalPoints = 0;

    const driver1 = this.drivers.find(driver => driver.Driver.driverId === squad.driver1);
    const driver1Position = driver1.position;
    const driver1Points = pointsByPosition[driver1Position];
    totalPoints += driver1Points * 2;

    const driver2 = this.drivers.find(driver => driver.Driver.driverId === squad.driver2);
    const driver2Position = driver2.position;
    const driver2Points = pointsByPosition[driver2Position];
    totalPoints += driver2Points;

    const driver3 = this.drivers.find(driver => driver.Driver.driverId === squad.driver3);
    const driver3Position = driver3.position;
    const driver3Points = pointsByPosition[driver3Position];
    totalPoints += driver3Points;

    localStorage.setItem('driver1', `${driver1.Driver.givenName} ${driver1.Driver.familyName}`);
    localStorage.setItem('driver2', `${driver2.Driver.givenName} ${driver2.Driver.familyName}`);
    localStorage.setItem('driver3', `${driver3.Driver.givenName} ${driver3.Driver.familyName}`);
    localStorage.setItem('teamName', squad.teamName);
    localStorage.setItem('totalPoints', JSON.stringify(totalPoints));

    const team = {
      teamName: squad.teamName,
      totalPoints: totalPoints,
      driver1: driver1.Driver.givenName + " " + driver1.Driver.familyName,
      driver2: driver2.Driver.givenName + " " + driver2.Driver.familyName,
      driver3: driver3.Driver.givenName + " " + driver3.Driver.familyName
    };
    this.db.object(`teams/${squad.teamName}`).set(team)
      .then(() => console.log('Team saved successfully'))
      .catch(error => console.log('Error saving team: ', error));
      console.log(team)
      this.router.navigate(['home/teamsStanding']);
      if (this.squadForm.invalid) {
        console.log('Il form non è valido');
        return;
      }
    }

    name = localStorage.getItem('teamName');
    driver1 = localStorage.getItem('driver1');
    driver2 = localStorage.getItem('driver2');
    driver3 = localStorage.getItem('driver3');
    totalPoints = JSON.parse(localStorage.getItem('totalPoints') as string);

    get squadFormValue() { return this.squadForm?.value ?? null; }
}
