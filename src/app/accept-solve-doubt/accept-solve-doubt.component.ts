import { Component, OnInit } from '@angular/core';
import { DoubtResolutionService } from '../doubt-resolution-service';
import { Router } from '@angular/router';
import { StatsService } from '../stats.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-accept-solve-doubt',
  templateUrl: './accept-solve-doubt.component.html',
  styleUrls: ['./accept-solve-doubt.component.css']
})
export class AcceptSolveDoubtComponent implements OnInit {
  doubt:any;
  answer:string | undefined;
  user:any;
  start:any;
  end:any;
  constructor(private doubtResolutionService:DoubtResolutionService,private router:Router,private stats:StatsService,private userService:UserService) { }

  ngOnInit(): void {
    this.start = new Date();
    this.doubtResolutionService.getAcceptData().subscribe(data=>this.doubt=data);
    this.userService.getUser().subscribe(data=>{
      console.log(data);
      this.user = data;
      this.stats.updateDoubtAccepted(data.userId);
    })
  }

  answerDoubt(){
    this.doubt.answer=this.answer;
    this.doubt.status='RESOLVED'
    this.doubtResolutionService.updateDoubt(this.doubt).subscribe(data=>{
      this.end = new Date();
      var diffInSeconds = Math.abs(this.end - this.start) / 1000;
      var timeTakenInMinutes = Math.floor(diffInSeconds / 60 % 60);
      this.stats.updateDoubtResolved(this.user.userId,timeTakenInMinutes)
      this.router.navigate(['home/solve-doubt']);
    })
  }

  escalate(){
    this.stats.updateDoubtEscalated(this.user.userId);
    this.router.navigate(['home/solve-doubt']);
  }

}
