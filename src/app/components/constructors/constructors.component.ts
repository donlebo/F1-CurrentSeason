import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Constructor, ConstructorStanding, StandingsList } from 'src/app/interfaces/constructors';
import { ResultsService } from 'src/app/providers/results.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.css']
})
export class ConstructorsComponent implements OnInit{

  constructorStandings!: any[];
  displayedColumns: string[] = ['position', 'name', 'wins', 'points'];
  selectedConstructor!: Constructor;
  show: boolean = false;

  constructor(private results: ResultsService, private router: Router){}

  ngOnInit() {
    this.show = true;
    setTimeout(()=>{
      this.results.getConstructorStandings().subscribe(constructors => {
        this.constructorStandings = constructors;
        console.log(this.constructorStandings);
      });
      this.show=false
    }, 2000);
      return;
  }

  goToConstructorDetails(constructor: ConstructorStanding){
    const constructorId = constructor.Constructor.constructorId;
    console.log(constructor.Constructor.constructorId);
    this.router.navigate(['/constructorDetails', constructorId]);
    localStorage.setItem('constructor', constructor.Constructor.constructorId);
    console.log(constructor);
  }

  selectconstructor(constructor: Constructor){
    this.selectedConstructor = constructor;
  }
}
