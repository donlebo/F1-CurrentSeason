import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-competition-calendar',
  templateUrl: './competition-calendar.component.html',
  styleUrls: ['./competition-calendar.component.css']
})
export class CompetitionCalendarComponent implements OnInit{

  selectedCompetition!: any;

  constructor(private bottomSheetRef: MatBottomSheetRef<CompetitionCalendarComponent>){}

  ngOnInit() {
    this.selectedCompetition = JSON.parse(localStorage.getItem('selectedCompetition') as string);
    console.log(this.selectedCompetition);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
