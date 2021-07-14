import { Component, OnInit } from '@angular/core';
import { DoubtResolutionService } from '../doubt-resolution-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solve-doubt',
  templateUrl: './solve-doubt.component.html',
  styleUrls: ['./solve-doubt.component.css']
})
export class SolveDoubtComponent implements OnInit {
  unsolvedDoubts :any[] | undefined;
  constructor(private doubtResolutionService: DoubtResolutionService,private router: Router) { }

  ngOnInit(): void {
    this.doubtResolutionService.getDoubtList().subscribe(data => this.unsolvedDoubts = data.filter(function (e: { status: string; }) {
      return e.status === 'UNRESOLVED';
    }));
  }

  accept(doubt: any) {
    this.doubtResolutionService.setAcceptData(doubt).subscribe(data=>{
      //console.log(data);
      this.router.navigate(['home/accept-doubt']);
    })
    
  }

}
