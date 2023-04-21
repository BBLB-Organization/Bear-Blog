import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageService } from 'src/app/core/services/image-service/image.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {
  @Output() fileSelected : EventEmitter<File> = new EventEmitter();

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.fileSelected.emit(event.target.files[0])
  }

}
