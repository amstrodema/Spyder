import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GenericModel } from "src/app/models/genericModel";
import {
  Missing,
  FeatureType,
  FeatureGroup,
  Feature
} from "src/app/models/missing";
import { Notifier } from "src/app/models/notifier";
import { FeatureGroupService } from "src/app/service/feature-group.service";
import { FeatureService } from "src/app/service/feature.service";
import { ModelClass } from "src/app/models/modelClass";
import { ResponseMessage } from "src/app/models/responseMessage";
import { MissingService } from "src/app/service/missing.service";
import { MissingVM } from "src/app/models/missingVM";

@Component({
  selector: "app-new-missing",
  templateUrl: "./new-missing.component.html",
  styleUrls: ["./new-missing.component.scss"]
})
export class NewMissingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
