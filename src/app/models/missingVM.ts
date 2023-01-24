import { Feature, Missing, FeatureVM } from "./missing";

export class MissingVM {
  missing:Missing;
  missingDetails:Missing;
  features:Feature[] = [];
  featureVMs: FeatureVM[] = [];
}

