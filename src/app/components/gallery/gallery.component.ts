import { Component, OnInit, Input} from '@angular/core';
import { ScriptLoader } from 'src/app/models/script-loader';
import { GenericModel } from 'src/app/models/genericModel';
import { ModelClass } from 'src/app/models/modelClass';
import { Image } from 'src/app/models/image';
import { Link } from 'src/app/models/link';
import { GalleryService } from 'src/app/service/gallery.service';
import { GalleryVM } from 'src/app/models/galleryVM';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  count: number = 0;
  image: string = "";
  youtubeLink: string = "";
  showGallery = false;
  @Input() creatorID;
  @Input() itemID;
  isSavingImage = false;
  isSavingLink = false;
  showImageGalleryModifier = false;
  showLinkGalleryModifier = false;
  images: Image[] = [];
  links: Link[] = [];
  galleryVM: GalleryVM = new GalleryVM();

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
   // ModelClass.LoadScripts();
    this.GetGallery();
    //alert(this.itemID+"$$"+ this.creatorID +"$$" + ModelClass.user.id);
  }

  GetGallery() {
    this.galleryService.GetGallery(this.itemID).subscribe((response: any) => {
      this.showGallery = true
      this.galleryVM = response;
      if (ModelClass.isLogged) {
        if (ModelClass.user.id == this.creatorID) {
          if (this.galleryVM.images.length < 5) {
            this.showImageGalleryModifier = true;
          }
          else{
            this.showLinkGalleryModifier = false;
          }

          if (this.galleryVM.links.length < 5) {
            this.showLinkGalleryModifier = true;
          }
          else{
            this.showLinkGalleryModifier = false;
          }
        }
        else{
          this.showLinkGalleryModifier = false;
        }
      }
      else{
        this.showLinkGalleryModifier = false;
      }
    });
  }

  SaveImage() {
    if(this.image =="")
    {
      Notifier.Notify("Empty image", "danger", 2000);
    }
    else if (ModelClass.isLogged) {
      if (ModelClass.user.id == this.creatorID) {
        var image: Image = new Image();
        image.original = this.image;
        image.itemID = this.itemID;
        image.createdBy = ModelClass.user.id;
        this.isSavingImage = true;

        this.galleryService
          .SaveImage(image)
          .subscribe((response: ResponseMessage) => {
            if (response.statusCode == 200) {
              Notifier.Notify("Uploaded successfully","success", 2000);
              this.isSavingImage = false;

    this.GetGallery();
            } else {
              Notifier.Notify(response.message, "danger", 2000);
            }
          });
      }
      else{
        Notifier.Notify("Only content owner can add", "danger", 2000);
      }
    }
    else{
      Notifier.Notify("Log in and try again", "danger", 2000);
    }
  }
  SaveLink() {
    if(this.youtubeLink =="")
    {
      Notifier.Notify("Input youtube link", "danger", 2000);
    }
    else if (ModelClass.isLogged) {
      if (ModelClass.user.id == this.creatorID) {
        var link: Link = new Link();
        link.address = this.youtubeLink;
        link.itemID = this.itemID;
        link.createdBy = ModelClass.user.id;

        this.isSavingLink = true;

        this.galleryService
          .SaveLink(link)
          .subscribe((response: ResponseMessage) => {
            if (response.statusCode == 200) {
              Notifier.Notify("Youtube link submitted","success", 2000);
              this.isSavingLink = false;
              this.GetGallery();
            } else {
              Notifier.Notify(response.message, "danger", 2000);
            }
          });
      }
      else{
        Notifier.Notify("Only content owner can add", "danger", 2000);
      }
    }
    else{
      Notifier.Notify("Log in and try again", "danger", 2000);
    }
  }
  OptionFileChangeEvent(fileInput: any) {
    GenericModel.FileChangeEvent(fileInput);

    setTimeout(() => {
      this.image = GenericModel.cardImageBase;
    }, 1000);
  }
}
