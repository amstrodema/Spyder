import { Component, Input, OnInit } from "@angular/core";
import { FeatureVM } from "src/app/models/missing";

@Component({
  selector: "app-banner-gen",
  templateUrl: "./banner-gen.component.html",
  styleUrls: ["./banner-gen.component.scss"],
})
export class BannerGenComponent implements OnInit {
  constructor() {}
  @Input() Title = "";
  @Input() Name = "";
  @Input() LastSeen = "";
  @Input() Features:FeatureVM[] = [];
  @Input() Desc = "";
  @Input() Image = "";
  @Input() Username = "";
  @Input() parentThis: any;

  scale = 2;
  bannerSrc = "";
  imagePositionX: number = 120;
  imagePositionY: number = 150;
  color = 'White';
  back = "assets/images/back5.png";
  backNo = 1;
  isLeftDisabled = true;
  isRightDisabled = false;

  ngOnInit() {
    this.banner();
  }

  Cancel(){
    this.parentThis.isHideBanner = true;
  }

  ModifyX(val){
    this.imagePositionX = this.imagePositionX +(this.scale* val);
    this.banner();
  }

  ModifyY(val){
    this.imagePositionY = this.imagePositionY +(this.scale* val);
    this.banner();
  }

  ModifyGlobalColor(val){
    this.color = val;
    this.banner();
  }

  ChangedScale(){
    if (this.scale < 1) {
      this.scale = 1;
    }
    else if (this.scale > 20)  {
      this.scale = 20;
    }
  }

  ChangeBack(val){
    this.backNo += val;

    if (this.backNo <= 1) {
this.back = 'assets/images/back5.png';
this.isLeftDisabled = true;
this.backNo = 1;
    } else  if (this.backNo == 2){
this.back = 'assets/images/back2.png';
this.isLeftDisabled = false;
    }else  if (this.backNo == 3){
this.back = 'assets/images/back4.png';
    }else  if (this.backNo == 4){
this.back = 'assets/images/back.png';
this.isRightDisabled = false;
    }else  if (this.backNo >= 5){
this.back = 'assets/images/back6.png';
this.isRightDisabled = true;
this.backNo = 5;
    }

this.banner();
  }
  banner() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set the width and height of the canvas
    canvas.width = 800;
    canvas.height = 1131;

    // Define the type of image data
    interface ImageData {
      image: HTMLImageElement;
      width: number;
      height: number;
    }

    // Load the images to be merged
    const image1 = new Image();
    const image3 = new Image();
    const image4 = new Image();
    image1.src = this.back;
    image3.src = "assets/images/SpyderLogo.png";
    image4.src = "assets/images/back3.png";
    const image2 = new Image();
    image2.src = this.Image;

    // Wait for the images to load before merging them
    Promise.all([getImageData(image1), getImageData(image2), getImageData(image3), getImageData(image4)]).then(
      ([imageData1, imageData2, imageData3, imageData4]) => {
        // Draw the first image onto the canvas
        ctx.drawImage(imageData1.image, 0, 0, canvas.width, canvas.height);

        if (this.backNo == 2) {
          ctx.drawImage(imageData4.image, 0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(
          imageData2.image,
          this.imagePositionX,
          this.imagePositionY,
          600,
          (600*imageData2.image.height)/imageData2.image.width
        );


        ctx.drawImage(imageData3.image, 370, this.imagePositionY, 100, 100);
// imageData2.image.height*0.5
        ctx.fillStyle = this.color;
        ctx.font = "60px Broadway";
        ctx.textAlign = "center";
        ctx.fillText(this.Title, canvas.width / 2, 75);

        ctx.fillStyle = this.color;
        ctx.font = "35px Arial";
        ctx.textAlign = "center";
        ctx.fillText(this.Name, canvas.width / 2, 120);

        let count = 1;
        let space = 1;
        this.Features.forEach(element => {
          if (count <= 4) {
            ctx.fillStyle = this.color;
            ctx.font = "25px arial";
            ctx.textAlign = "left";
            let value = element.featureType +": "+ element.value;
            ctx.fillText(value, this.imagePositionX, (this.imagePositionY+50+(600*image2.height)/image2.width)+space);
          }

          count++;
          space += 40;
        });

        let wordCount =0;
        let line = "";
        let lineSpace = 1;
        this.Desc.split(' ').forEach(element => {

          wordCount++;
          if (wordCount > 8 || wordCount == this.Desc.split(' ').length) {

            ctx.fillStyle = this.color;
            ctx.font = "25px arial";
            ctx.textAlign = "left";
            ctx.fillText(line, this.imagePositionX, (this.imagePositionY+50+lineSpace+(600*image2.height)/image2.width)+space);
            wordCount = 0;
            line = "";
          } else {
            line += element+" "
          }

          lineSpace+= 4;
        });


         wordCount =0;
         line = "";
         let lineSpa= 1;
        this.LastSeen.split(' ').forEach(element => {
          wordCount++;
          if (wordCount > 8 || wordCount == this.LastSeen.split(' ').length) {

            ctx.fillStyle = this.color;
            ctx.font = "25px arial";
            ctx.textAlign = "left";
            ctx.fillText(line, this.imagePositionX, (this.imagePositionY+50+lineSpa+(600*image2.height)/image2.width)+space+lineSpace+30);
            wordCount = 0;
            line = "";
          } else {
            line += element+" "
          }

          lineSpa+= 4;
        });

        ctx.fillStyle = this.color;
        ctx.font = "25px arial";
        ctx.textAlign = "left";
        ctx.fillText("Contact @"+this.Username+" on SPYDER", this.imagePositionX, (this.imagePositionY+100+lineSpa+(600*image2.height)/image2.width)+space+lineSpace+30);

        // Add a caption to the canvas
        // ctx.fillStyle = this.color;
        // ctx.font = "30px Arial";
        // ctx.textAlign = "center";
        // ctx.fillText(this.LastSeen, canvas.width / 2, canvas.height - 50);

        // Use the canvas as the source of a new image
        const mergedImage = new Image();
        // mergedImage.src = canvas.toDataURL();
        this.bannerSrc = canvas.toDataURL();
        // document.body.appendChild(mergedImage); // Show the merged image on the page
      }
    );

    function getImageData(image: HTMLImageElement): Promise<ImageData> {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous"; // Allow the image to be loaded from a different domain
        img.onload = () => {
          resolve({
            image: img,
            width: img.width,
            height: img.height,
          });
        };
        img.src = image.src;
      });
    }
  }
}
