import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/providers/results.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent {
  competitions: any;
  displayedColumns: string[] = ['round', 'raceName', 'info'];
  dataSource: any;
  show: boolean = false;

  constructor(private results: ResultsService, private router: Router){}

  ngOnInit() {
    this.show = true;
    setTimeout(()=>{
      this.results.getCompetitions().subscribe(competitions => {
        this.competitions = competitions.MRData.RaceTable.Races;
        console.log(this.competitions);
        this.dataSource = new MatTableDataSource(this.competitions);
      })
      this.show=false
    }, 2000);
    return;
  }

  selectCompetition(circuitId: string): void {
    const selectedCompetition = this.competitions.find((competition: { Circuit: { circuitId: string; }; }) => competition.Circuit.circuitId === circuitId);
    localStorage.setItem('selectedCompetition', JSON.stringify(selectedCompetition));
    this.router.navigate(['/competitions', circuitId]);
    localStorage.setItem('circuit', selectedCompetition.Circuit.circuitId);
  }
}
