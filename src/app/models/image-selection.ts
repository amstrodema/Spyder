import * as _ from "lodash";
export class ImageSelection {
  static cardImageBase: string;

  static FileChangeEvent(fileInput: any) {

  let imageError: string;
  let isImageSaved: boolean;

    imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return "false";
        }

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            imageError = 'Only Images are allowed ( JPG | PNG )';
            return "false";
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                //console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                  imageError =
                        'Maximum dimensions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return "false";
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase = imgBase64Path;
                    isImageSaved = true;
                    // this.previewImagePath = imgBase64Path;
                    setTimeout(() => {

                    }, 9000);
                  return this.cardImageBase;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);


    }
}

}
