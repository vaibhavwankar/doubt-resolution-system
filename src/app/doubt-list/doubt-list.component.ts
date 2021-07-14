import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoubtResolutionService } from '../doubt-resolution-service';

@Component({
  selector: 'app-doubt-list',
  templateUrl: './doubt-list.component.html',
  styleUrls: ['./doubt-list.component.css']
})
export class DoubtListComponent implements OnInit {
  doubts : any[] | undefined;
  constructor(private doubtResolutionService: DoubtResolutionService) { }

  ngOnInit(): void {
    this.doubtResolutionService.getDoubtList().subscribe(data => this.doubts=data);
  }

  addComment(form: NgForm, doubt: any): void {
    const comment = { by: "mock", comment: form.value.comment };
    doubt.Comments.push(comment);
    this.doubtResolutionService.updateDoubt(doubt).subscribe(data=>{
      console.log(data)
    });
  }
}
