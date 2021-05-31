export interface Location {
  position:[
    latitude: number,
    longitude: number
  ];
  time:[{
    seconds: number,
    nanos: number
  }];
  altitude: number;
}
