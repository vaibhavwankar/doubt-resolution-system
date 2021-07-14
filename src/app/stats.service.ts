import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  reports = {
    stat: { totalDoubtsAsked: 23, totalDoubtsResolved: 12, totalDoubtsEscalated: 3, totalAvgTime: 37 },
    report: [
      { id: '2', name: 'Ayush', report: { doubtsAccepted: 16, doubtsResolved: 14, doubtsEscalated: 13, avgTime: 3 } },
      { id: '3', name: 'Aakash', report: { doubtsAccepted: 16, doubtsResolved: 14, doubtsEscalated: 13, avgTime: 3 } },
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
    }
  }

  updateTotalDoubtsAsked() {
    this.reports.stat.totalDoubtsAsked += 1;
  }

}
