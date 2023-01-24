import { Marriage } from "./marriage";
import { Feature, FeatureVM } from "./missing";

export class MarriageVM {
  marriage:Marriage;
  features: Feature[] = [];
  featureVMs: FeatureVM[] = [];
}
