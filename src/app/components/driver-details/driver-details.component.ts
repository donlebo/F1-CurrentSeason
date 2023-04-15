import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ResultsService } from 'src/app/providers/results.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit, OnDestroy{

  driverDetails! : any;
  dataSource: any;
  imagePath: string = 'assets/' + localStorage.getItem('driver') + '.jpg';
  show: boolean = false;

  constructor(private result: ResultsService, private route: ActivatedRoute, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'disable-scroll');
    this.show = true;
    setTimeout(()=>{
      this.result.getDriverDetails(localStorage.getItem('driver') as string).subscribe(drivers => {
        this.driverDetails = drivers.MRData.DriverTable;
        console.log(this.driverDetails);
      })
      this.show=false
    }, 2000);
    return;
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'disable-scroll');
  }
}
