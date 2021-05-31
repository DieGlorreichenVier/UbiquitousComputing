import {Component, OnInit} from '@angular/core';
import {Location} from "./location";
import {LocationService} from "./location.service";
import {HttpErrorResponse} from "@angular/common/http";
import * as L from 'leaflet';
import {latLng, polyline} from "leaflet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private map;
  public locationPhillipArray: Location[];
  public locationAlexanderArray: Location[];
  public locationMartinArray: Location[];
  public locationMarkusArray: Location[];


  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    this.getLocationPhillip();
    this.getLocationMarkus();
    this.getLocationAlexander();
    this.getLocationMartin();
    setTimeout(() => {
        this.initMap();
      },
      1000);
  }

  private initMap(): void {
    let polylinePointsPhillip = [];
    let polylinePointsMarkus = [];
    let polylinePointsAlexander = [];
    let polylinePointsMartin = [];
    let result: number[] = [];
    let Phillip = L.layerGroup();
    let Alexander = L.layerGroup();
    let Martin = L.layerGroup();
    let Markus = L.layerGroup();

    let overlays = {
      "Phillip": Phillip,
      "Alexander": Alexander,
      "Martin": Martin,
      "Markus": Markus
    };
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    this.map = L.map('map', {
      center: [48.783333, 9.183333],
      zoom: 10
    });

    L.control.layers(overlays).addTo(this.map);
    tiles.addTo(this.map);

    for (const element of this.locationPhillipArray) {
      var elements = Object.entries(element);
      var elementa = Object.entries(elements).map(([k, v]) => [+k, v]);
      var myutil = Object.values(elementa[0][1][1]);
      result = myutil.map((i) => Number(i));
      var latlng = L.latLng(result[0], result[1]);
      if (latlng.lat == 0 && latlng.lng == 0) {
        Phillip.addLayer(L.polyline(polylinePointsPhillip, {color: 'red', weight: 5, opacity: 1, smoothFactor: 1}));
        polylinePointsPhillip = [];
        continue
      }
      polylinePointsPhillip.push(latlng);

    }
    Phillip.addLayer(L.polyline(polylinePointsPhillip, {color: 'red', weight: 5, opacity: 1, smoothFactor: 1}));

    for (const element of this.locationMarkusArray) {
      var elements = Object.entries(element);
      var elementa = Object.entries(elements).map(([k, v]) => [+k, v]);
      var myutil = Object.values(elementa[0][1][1]);
      result = myutil.map((i) => Number(i));
      var latlng = L.latLng(result[0], result[1]);
      if (latlng.lat == 0 && latlng.lng == 0) {
        Markus.addLayer(L.polyline(polylinePointsMarkus, {color: 'blue', weight: 5, opacity: 1, smoothFactor: 1}));
        polylinePointsMarkus = [];
        continue
      }
      polylinePointsMarkus.push(latlng);

    }
    Markus.addLayer(L.polyline(polylinePointsMarkus, {color: 'blue', weight: 5, opacity: 1, smoothFactor: 1}));


    for (const element of this.locationAlexanderArray) {
      var elements = Object.entries(element);
      var elementa = Object.entries(elements).map(([k, v]) => [+k, v]);
      var myutil = Object.values(elementa[0][1][1]);
      result = myutil.map((i) => Number(i));
      var latlng = L.latLng(result[0], result[1]);
      if (latlng.lat == 0 && latlng.lng == 0) {
        Alexander.addLayer(L.polyline(polylinePointsAlexander, {color: 'yellow', weight: 5, opacity: 1, smoothFactor: 1
        }));
        polylinePointsAlexander = [];
        continue
      }
      polylinePointsAlexander.push(latlng);

    }
    Alexander.addLayer(L.polyline(polylinePointsAlexander, {color: 'yellow', weight: 5, opacity: 1, smoothFactor: 1}));


    for (const element of this.locationMartinArray) {
      var elements = Object.entries(element);
      var elementa = Object.entries(elements).map(([k, v]) => [+k, v]);
      var myutil = Object.values(elementa[0][1][1]);
      result = myutil.map((i) => Number(i));
      var latlng = L.latLng(result[0], result[1]);
      if (latlng.lat == 0 && latlng.lng == 0) {
        Martin.addLayer(L.polyline(polylinePointsMartin, {color: 'green', weight: 5, opacity: 1, smoothFactor: 1}));
        polylinePointsMartin = [];
        continue
      }
      polylinePointsMartin.push(latlng);

    }
    Martin.addLayer(L.polyline(polylinePointsMartin, {color: 'green', weight: 5, opacity: 1, smoothFactor: 1}));


  }


  public getLocationPhillip() {
    this.locationService.getLocationsPhilipp().subscribe(
      (response: Location[]) => {
        this.locationPhillipArray = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getLocationMarkus() {
    this.locationService.getLocationsMarkus().subscribe(
      (response: Location[]) => {
        this.locationMarkusArray = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getLocationAlexander() {
    this.locationService.getLocationsAlexander().subscribe(
      (response: Location[]) => {
        this.locationAlexanderArray = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getLocationMartin() {
    this.locationService.getLocationsMartin().subscribe(
      (response: Location[]) => {
        this.locationMartinArray = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
