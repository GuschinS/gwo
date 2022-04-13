import { Component, OnInit } from '@angular/core';
import { regions } from '../../interfaces/regions';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions = regions;

  constructor() { }

  ngOnInit(): void {
  }

}
