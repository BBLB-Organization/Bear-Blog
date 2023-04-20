import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {
  selectedFile!: File;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (this.selectedFile != null) {
      this.imageService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          console.log('Upload successful', response)
        }
      );
    }
  }

}
