import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor() { }

  ngOnInit(){}

  openToaster() {
    this.toggle = true;
    setTimeout(() => {
      this.toggle = false;
    }, this.timeOut);
  }

  closeToaster() {
    this.toggle = false;
  }

  @Input() message: string = "";

  @Input() title: string = "";

  timeOut: number = 5000;
  public toggle = false;

}
