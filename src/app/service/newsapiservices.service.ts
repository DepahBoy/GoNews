import { TechnewsComponent } from './../technews/technews.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=da9a5050cdc746b8af71f5c0596d3e78';

  //technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=da9a5050cdc746b8af71f5c0596d3e78"

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //technews
  TechNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }


}
