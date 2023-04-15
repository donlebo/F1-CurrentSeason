import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { ResultsService } from 'src/app/providers/results.service';
import { CompetitionCalendarComponent } from '../competition-calendar/competition-calendar.component';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent implements OnInit{

  selectedCompetition!: any;
  imagePath: string = 'assets/' + localStorage.getItem('circuit') + '.png';
  show: boolean = false;

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.show = true;
    setTimeout(()=>{
      this.selectedCompetition = JSON.parse(localStorage.getItem('selectedCompetition') as string);
      console.log(this.selectedCompetition);
      this.show=false
    }, 2000);
    return;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(CompetitionCalendarComponent)}
  }

