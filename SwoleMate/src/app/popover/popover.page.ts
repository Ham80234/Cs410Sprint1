import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor() { }
  information: any[] = []
  ngOnInit() {
    this.information.push('Arms', 'Legs', 'Core', 'Shoulders')
    
  }

}
