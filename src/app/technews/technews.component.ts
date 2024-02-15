import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrl: './technews.component.css'
})
export class TechnewsComponent implements OnInit{

  constructor(private _services:NewsapiservicesService) {}

  technewsDisplay:any = [];

  ngOnInit(): void {
    
    this._services.TechNews().subscribe((result)=>{
      this.technewsDisplay = result.articles;
    });

  }

}
