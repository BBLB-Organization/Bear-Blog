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
  listOfImageUrl: SafeUrl[] = [];
  selectedFile!: File;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadImage();
    this.loadAllImages();
  }

  loadAllImages(){
    this.imageService.getAllImages().subscribe((data:Image[])=>{
      data.forEach((image:Image)=>{
        let blob = new Blob([image.data], { type: 'image/jpeg' });
        let safeBlobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
        this.listOfImageUrl.push(safeBlobUrl);
      })
      this.listOfImageUrl.forEach((info)=>{console.log(info)})
    })
  }

  loadImage() {
    const imageName = 'Sample_abc.jpg';
    this.imageService.getImageByName(imageName).subscribe((data: Blob) => {
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data))
      //console.log(this.imageUrl)
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

