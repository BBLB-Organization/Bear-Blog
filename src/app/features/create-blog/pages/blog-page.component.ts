import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Image } from 'src/app/core/models/image';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  imageUrl!: SafeUrl;
  image: Blob = new Blob();
  selectedFile!: File;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage() {
    const imageName = 'Sample_abc.jpg';
    this.imageService.getImageByName(imageName).subscribe((data: Blob) => {
      this.image = data;
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image))
    })
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

