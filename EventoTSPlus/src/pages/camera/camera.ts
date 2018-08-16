import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  myPhoto: any;
  //imageURI: any;
  //imageFileName: any;

  constructor(public navCtrl: NavController,
    private camera: Camera,
    private transfer: FileTransfer,
    private file: File,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {

  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      var i = 0;
    });
  }

  uploadFile(){
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    //var random = Math.floor(Math.random() * 100);

    let options: FileUploadOptions = {
      fileKey: 'photo',
      fileName: 'photo_' + 1 + '.jpg',
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.myPhoto, 'http://178.128.158.114/api/upload.php', options)
      .then((data) => {
        console.log(data + "Uploaded Successfully");
        //this.imageFileName = "hellouitsmeionicfile.jpg";
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
