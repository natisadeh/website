import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {AuthService} from "../../services/auth.service";
import {AssetsService} from "../../services/assets.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {Asset} from "../../../Asset";

@Component({
  moduleId: module.id,
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})

export class AssetsComponent implements OnInit {
  address: string;
  squareMeter: string;
  monthlyRent: string;
  rooms: string;
  partners: string;
  homeCondition: string;
  homeDesign: string;
  floor: string;
  animals: string;
  elevator: string;
  parking: string;
  garage: string;
  grate: string;
  airCon: string;
  cripple: string;
  assets: Asset[];

  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private assetService:AssetsService,
    private router: Router) {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assets = assets;
      })
  }

  ngOnInit() {
  }

  onAssetSubmit(){
    const asset = {
      address: this.address,
      squareMeter: this.squareMeter,
      monthlyRent: this.monthlyRent,
      rooms: this.rooms,
      partners: this.partners,
      homeCondition: this.homeCondition,
      homeDesign: this.homeDesign,
      floor: this.floor,
      animals: this.animals,
      elevator: this.elevator,
      parking: this.parking,
      garage: this.garage,
      grate: this.grate,
      airCon: this.airCon,
      cripple: this.cripple,
    };

    // Required Fields
    if(!this.validateService.validateAsset(asset)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Add new asset
    this.assetService.addAsset(asset).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Added new asset', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show('The address is already exist', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/assets']);
      }
    });
  }
}
