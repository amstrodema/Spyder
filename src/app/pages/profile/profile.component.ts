import { Component, OnInit } from "@angular/core";
import { ModelClass } from "src/app/models/modelClass";
import { Router, ActivatedRoute } from "@angular/router";
import { Notifier } from "src/app/models/notifier";
import { ProfileService } from "src/app/service/profile.service";
import { ResponseMessage } from "src/app/models/responseMessage";
import { Registration } from "src/app/models/registration";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  personalPetition: boolean = true;
  petitionComment: boolean = false;
  petitionVote: boolean = false;
  userID: string;
  user:Registration;
  isLoading:boolean= true;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute, private profileService:ProfileService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.userID = params["id"];

      if (this.userID == undefined) {
        if (ModelClass.isLogged) {
          this.userID = ModelClass.user.id;
        }
        else{
          this.router.navigate(["/search"]);
        }
      }

    });

    this.GetProfile();
  }

  GetProfile(){
    this.profileService.GetUserProfile(this.userID).subscribe((response: ResponseMessage) => {
          if (response.statusCode == 200) {
           this.user = response.data;
          }
          else {
             Notifier.Notify(response.message, "danger", 2000);
          }

          this.isLoading = false;
        });
    }

  Show(val){
    this.HideAll();

    switch (val) {
      case "1":
        this.personalPetition = true
        break;
      case "2":
        this.petitionComment = true
        break;
      case "3":
        this.petitionVote = true
        break;

      default:
        break;
    }
  }
  HideAll() {
    this.personalPetition = false;
    this.petitionComment = false;
    this.petitionVote = false;
  }
}
