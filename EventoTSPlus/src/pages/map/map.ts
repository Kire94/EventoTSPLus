import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  /*CameraPostion,*/
  MarkerOptions,
  Marker } from '@ionic-native/google-maps';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;

  //map: GoogleMap;

  constructor(public navCtrl: NavController, public googleMaps: GoogleMaps) {

  }

  ionViewDidLoad(){
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(20.489972, -87.242412);
    const options = {
      center: location,
      zoom: 15.5
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  // ionViewDidLoad(){
  //   this.loadMap();
  // }
  //
  // loadMap(){
  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //       target: {
  //         lat: 43.0741904,
  //         lng: -89.3809802
  //       },
  //       zoom: 15,
  //       tilt: 30
  //     }
  //   };
  //
  //   this.map = this.googleMaps.create('map_canvas', mapOptions);
  //
  //   this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
  //     this.getPosition();
  //   }).catch(error => {
  //     console.log(error);
  //   });

    /*let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });*/
  //}

  // getPosition(): void{
  //   this.map.getMyLocation().then(response => {
  //     this.map.moveCamera({
  //       target: response.latLng
  //     });
  //     this.map.addMarker({
  //       title: 'My Position',
  //       icon: 'red',
  //       animation: 'DROP',
  //       position: response.latLng
  //     });
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }
}
