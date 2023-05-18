import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageService } from 'src/app/core/services/image-service/image.service';

@Component({
  selector: 'app-view-images',
  templateUrl: './view-images.component.html',
  styleUrls: ['./view-images.component.css']
})
export class ViewImagesComponent implements OnInit {
  listOfImageUrl: SafeUrl[] = [];
  imageUrl!: SafeUrl;
  @Input() imageId: number | undefined;
  imageWidth = 400;
  imageHeight = 400;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //this.loadAllImages();
    this.loadImageById();
  }

  compressImage(data: Blob) {
    const image = new Image();
    let testing = URL.createObjectURL(data);
    image.src = testing;

    image.onload = () => {
      const maxWidthOrHeight = 400;

      if (image.width > image.height) {
        // Image is landscape, limit width to maxWidthOrHeight
        if (image.width > maxWidthOrHeight) {
          const ratio = maxWidthOrHeight / image.width;
          this.imageWidth = maxWidthOrHeight;
          this.imageHeight = Math.round(image.height * ratio);
        }
      } else {
        // Image is portrait or square, limit height to maxWidthOrHeight
        if (image.height > maxWidthOrHeight) {
          const ratio = maxWidthOrHeight / image.height;
          this.imageHeight = maxWidthOrHeight;
          this.imageWidth = Math.round(image.width * ratio);
        }
      }

    }
  }

  loadImageById() {
    if (this.imageId) {
      this.imageService.getImageById(this.imageId).subscribe((data: Blob) => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(data));
        this.compressImage(data);
      })
    }
  }

  //MAY USE LOAD ALL IMAGES LATER ...
  loadAllImages() {
    this.imageService.getAllImageNames().subscribe((listOfImageNames: string[]) => {
      listOfImageNames.forEach((imageName: string) => {
        this.imageService.getImageByName(imageName).subscribe((data: Blob) => {
          this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(data));
          this.listOfImageUrl.push(this.imageUrl);
        });
      });
    })
  }

}
