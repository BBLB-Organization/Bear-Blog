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

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //this.loadAllImages();
    this.loadImageById();
  }

  loadImageById() {
    if (this.imageId) {
      this.imageService.getImageById(this.imageId).subscribe((data: Blob) => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(data));
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
