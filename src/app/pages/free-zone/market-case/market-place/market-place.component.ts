import { Component, OnInit } from "@angular/core";
import { ResponseMessage } from "src/app/models/responseMessage";
@Component({
  selector: "app-market-place",
  templateUrl: "./market-place.component.html",
  styleUrls: ["./market-place.component.scss"]
})
export class MarketPlaceComponent implements OnInit {
  toggleSearchFilterIndicator: boolean = false;

  tab:number = 0;

  providerOptions = {
    binancechainwallet:{
      package:true
    }
  }

  constructor() {}

  ngOnInit() {}

  Click(tab: number){
    this.tab = tab;
  }

  NewBankAccount(){}

  toggleSearchFilter(val) {
    this.toggleSearchFilterIndicator = val;
  }

  NewEntry() {}

  BuySPY(){}

}
