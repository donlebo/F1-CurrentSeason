import { HttpClient } from '@angular/common/http';
import { EnvironmentProviders, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RootObject } from '../interfaces/drivers';
import { environment } from 'src/environments/environment';

export interface Source {
  id: string;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface RootObjectNews  {
  status: string;
  totalResults: number;
  articles: Article[];
}

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private driverStandings = 'https://ergast.com/api/f1/2023/driverStandings.json';
  private constructorStandings = 'https://ergast.com/api/f1/current/constructorStandings.json';
  private driverDetails = 'https://ergast.com/api/f1/drivers/'
  private constructorDetails = `https://ergast.com/api/f1/constructors/`;
  private competitions = 'https://ergast.com/api/f1/2023.json'

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<RootObject>{
    return this.http.get<RootObject>(this.driverStandings);
  }

  getDriverDetails(driverId: string): Observable<any> {
    return this.http.get<any>(`${this.driverDetails}${driverId}.json`);
  }

  getConstructorStandings(): Observable<any> {
    return this.http.get<any>(this.constructorStandings)
      .pipe(
        map(response => response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
      );
  }

  getConstructorDetails(constructorId: string): Observable<any> {
    return this.http.get<any>(`${this.constructorDetails}${constructorId}.json`);
  }

  getCompetitions(): Observable<any>{
    return this.http.get<any>(this.competitions);
  }

  host: string = 'https://newsapi.org/v2/';
  apiKey: string = environment.apiKey;

  getNews(page: number) {
    return this.http.get<RootObjectNews>(`${this.host}/everything?q=f1&apiKey=${this.apiKey}&page=${page}`).toPromise();
  }
}
