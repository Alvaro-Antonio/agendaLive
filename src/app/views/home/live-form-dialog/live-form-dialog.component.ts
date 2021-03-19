import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {

  public liveform: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private fb: FormBuilder,
    private rest: LiveService

  ) { }

  ngOnInit(): void {
    this.liveform = this.fb.group({
      liveName: ['',[Validators.required]],
      channelName: ['',[Validators.required]],
      liveDate: ['2021-08-01T20:00:00',[Validators.required]],
      liveTime: ['',[Validators.required]],
      liveLink: ['',[Validators.required]],
    });
  }

  cancel(): void{
    this.dialogRef.close();
  }

  createLive(){
    this.rest.postLives(this.liveform.value).subscribe(result => {});
    this.dialogRef.close();
    this.liveform.reset();
  }

}
