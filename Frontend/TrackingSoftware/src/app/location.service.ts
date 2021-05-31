import { Location } from './location';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LocationService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getLocationsAlexander(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiServerUrl}/getLocation/Alexander`);
  }

  public getLocationsPhilipp(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiServerUrl}/getLocation/Philipp`);
  }

  public getLocationsMartin(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiServerUrl}/getLocation/Martin`);
  }

  public getLocationsMarkus(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiServerUrl}/getLocation/Markus`);
  }

}

