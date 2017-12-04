import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateAsset(asset){
    if (asset.address == undefined || asset.squareMeter == undefined || asset.monthlyRent == undefined || asset.rooms == undefined
      || asset.partners == undefined || asset.homeCondition == undefined || asset.homeDesign == undefined || asset.floor == undefined
      || asset.animals == undefined || asset.elevator == undefined || asset.parking == undefined || asset.garage == undefined
      || asset.grate == undefined || asset.airCon == undefined || asset.cripple == undefined){
      return false;
    } else {
      return true;
    }
  }
}
