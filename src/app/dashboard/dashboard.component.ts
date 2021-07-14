import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalDoubtsAsked = 0;
  totalDoubtsResolved = 0;
  totalDoubtsEscalated = 0;
  totalAvgTime = 0;
  reports:any;

  constructor(private statsService:StatsService) { }

  ngOnInit(): void {
    this.totalDoubtsAsked=23;
    this.totalDoubtsResolved=12;
    this.totalDoubtsEscalated = 3;
    this.totalAvgTime = 37;
    this.statsService.getReport().subscribe(data=>{
      this.totalDoubtsAsked=data.stat.totalDoubtsAsked;
      this.totalDoubtsResolved=data.stat.totalDoubtsResolved;
      this.totalDoubtsEscalated = data.stat.totalDoubtsEscalated;
      this.totalAvgTime = data.stat.totalAvgTime;
      this.reports = data.report;
    })
  }

}
