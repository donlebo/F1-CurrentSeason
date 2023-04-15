import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Driver, DriverStanding } from 'src/app/interfaces/drivers';
import { ResultsService } from 'src/app/providers/results.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit{

  drivers: any;
  displayedColumns: string[] = ['position', 'name','points', 'info'];
  dataSource: any;
  selectedDriver!: Driver;
  show: boolean = false;

  constructor(private results: ResultsService, private router: Router, private renderer: Renderer2){}

  ngOnInit() {
    this.renderer.addClass(document.body, 'disable-scroll');
    this.show = true;
    setTimeout(()=>{
      this.results.getDrivers().subscribe(drivers => {
        this.drivers = drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        console.log(this.drivers);
        this.dataSource = new MatTableDataSource(this.drivers);
      })
      this.show=false
      this.renderer.removeClass(document.body, 'disable-scroll');
    }, 2000);
    return;
  }

  goToDriverDetails(driver: DriverStanding){
    const driverId = driver.Driver.driverId;
    console.log(driver.Driver.driverId);
    this.router.navigate(['/driverDetails', driverId]);
    localStorage.setItem('driver', driver.Driver.driverId);
    console.log(driver);
  }

  selectDriver(driver: Driver){
    this.selectedDriver = driver;
  }
}
