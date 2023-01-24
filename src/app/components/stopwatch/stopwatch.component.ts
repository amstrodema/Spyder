import { Router } from '@angular/router';
import { ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { CountdownConfig, CountdownEvent } from 'node_modules/ngx-countdown/interfaces';
import { Component, OnInit } from '@angular/core';
import { CountdownTimer } from 'ngx-countdown';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stopwatch',
  templateUrl:'./stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  host:{
    '[class.card]':`true`,
    '[class.text-center]':`true`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StopwatchComponent implements OnInit {
  @ViewChild('counter') launcher;
  @Input() duration: number;
  constructor(private router:Router, private toastr: ToastrService) { }
  config: CountdownConfig;
  ngOnInit() {
    this.config ={
      leftTime:this.duration,
      format: 'HH:mm:ss'
    };
    //this.launcher.start();
  }

  handleEvent(e: CountdownEvent){
    if (e.left === 0) {
      this.toastr.error("Please exit the hall","TIME UP!!");
     this.router.navigate([""], { replaceUrl: true });
    }
    //console.log('ass', e);

  }
}
