import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultsService } from 'src/app/providers/results.service';

@Component({
  selector: 'app-constructor-details',
  templateUrl: './constructor-details.component.html',
  styleUrls: ['./constructor-details.component.css']
})
export class ConstructorDetailsComponent implements OnInit{

  constructorDetails! : any;
  dataSource: any;
  imagePath: string = 'assets/' + localStorage.getItem('constructor') + '.jpg';
  show: boolean = false;

  constructor(private result: ResultsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.show = true;
    setTimeout(()=>{
      this.result.getConstructorDetails(localStorage.getItem('constructor') as string).subscribe(constructor => {
        this.constructorDetails = constructor.MRData.ConstructorTable;
        console.log(localStorage.getItem('constructor'));
        console.log(this.constructorDetails);
      })
      this.show=false
    }, 2000);
    return;
  }
}
