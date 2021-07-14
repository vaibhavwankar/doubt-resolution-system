import { CurrencyPipe } from '@angular/common';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  reports = {
    stat: { totalDoubtsAsked: 3, totalDoubtsResolved: 1, totalDoubtsEscalated: 0, totalAvgTime: 0 },
    report: [
      { id: '2', name: 'Ayush', report: { doubtsAccepted: 0, doubtsResolved: 0, doubtsEscalated: 0, avgTime: 0 } },
      { id: '3', name: 'Aakash', report: { doubtsAccepted: 0, doubtsResolved: 0, doubtsEscalated: 0, avgTime: 0 } },
    ]
  }

  constructor() { }

  getReport(): Observable<any> {
    return of(this.reports);
  }

  updateDoubtAccepted(id: string) {
    const index = this.reports.report.findIndex((obj => obj.id === id));
    if (index !== undefined) {
      this.reports.report[index].report.doubtsAccepted += 1;
    }
  }

  updateDoubtEscalated(id: string) {
    const index = this.reports.report.findIndex((obj => obj.id === id));
    if (index !== undefined) {
      this.reports.report[index].report.doubtsEscalated += 1;
      this.reports.stat.totalDoubtsEscalated += 1;
    }
  }

  updateDoubtResolved(id: string, timeTaken: number) {
    const index = this.reports.report.findIndex((obj => obj.id === id));
    if (index !== undefined) {
      const prevAvgTime = this.reports.report[index].report.avgTime;
      const doubtsSolvedSoFar = this.reports.report[index].report.doubtsResolved;
      const totalSumOfTime = doubtsSolvedSoFar * prevAvgTime + timeTaken;
      this.reports.report[index].report.avgTime = totalSumOfTime / (doubtsSolvedSoFar + 1);
      this.reports.report[index].report.doubtsResolved += 1;
      this.reports.stat.totalDoubtsResolved += 1;
      
      const sumAvgTime = this.reports.report.map(item=>item.report.avgTime).reduce((prev,curr)=>prev+curr,0);
      const totalTAs = this.reports.report.length;
      if(length){
        this.reports.stat.totalAvgTime = (sumAvgTime/totalTAs);
      }

    }
  }

  updateTotalDoubtsAsked() {
    this.reports.stat.totalDoubtsAsked += 1;
  }
  
}
