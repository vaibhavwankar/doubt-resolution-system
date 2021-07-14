import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoubtResolutionService } from '../doubt-resolution-service';
import { Router } from '@angular/router';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-raise-doubt',
  templateUrl: './raise-doubt.component.html',
  styleUrls: ['./raise-doubt.component.css']
})
export class RaiseDoubtComponent implements OnInit {

  constructor(private doubtResolutionService: DoubtResolutionService,private router:Router , private statsService:StatsService){ }

  ngOnInit(): void {
  }

  addDoubt(form: NgForm){
    //console.log("test");
    const doubt = {title: form.value.title, description: form.value.description, askedBy: 'mock', time: new Date().toLocaleString(), Comments: [],status:'UNRESOLVED' };
    this.doubtResolutionService.addDoubt(doubt).subscribe(data=>{
      //console.log(data);
      this.statsService.updateTotalDoubtsAsked();
      this.router.navigate(['home']);
    });
  }
}
