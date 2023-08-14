import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ViewImagesComponent } from './view-images.component';
import { ImageService } from 'src/app/core/services/image-service/image.service';
import { of } from 'rxjs';

describe('ViewImagesComponent', () => {
  let component: ViewImagesComponent;
  let fixture: ComponentFixture<ViewImagesComponent>;
  let mockImageService: jasmine.SpyObj<ImageService>;
  let mockDomSanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(() => {
    mockImageService = jasmine.createSpyObj('ImageService', ['getImageById']);
    mockDomSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);

    TestBed.configureTestingModule({
      declarations: [ViewImagesComponent],
      providers: [
        { provide: ImageService, useValue: mockImageService },
        { provide: DomSanitizer, useValue: mockDomSanitizer }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewImagesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call loadImageById', () => {
      spyOn(component, 'loadImageById');
      component.ngOnInit();
      expect(component.loadImageById).toHaveBeenCalled();
    });
  });

  describe('compressImage', () => {
    it('should compress image dimensions', () => {
      const blobData = new Blob();
      const mockImage = new Image();
      const testUrl = URL.createObjectURL(blobData);
      mockImage.src = testUrl;
      spyOn(window, 'Image').and.returnValue(mockImage);

      component.compressImage(blobData);
      mockImage.width = 800;
      mockImage.height = 600;
      expect(mockImage.onload).toBeDefined();



      expect(component.imageWidth).toEqual(400);
      expect(component.imageHeight).toEqual(400);
    });
  });

  describe('loadImageById', () => {
    it('should load and compress image', () => {
      const mockBlobData = new Blob();
      mockImageService.getImageById.and.returnValue(of(mockBlobData));
      const mockSafeUrl: SafeUrl = {} as SafeUrl;
      mockDomSanitizer.bypassSecurityTrustResourceUrl.and.returnValue(mockSafeUrl);
      const mockImage = new Image();
      spyOn(window, 'Image').and.returnValue(mockImage);

      component.imageId = 123;
      component.loadImageById();

      expect(mockImageService.getImageById).toHaveBeenCalledWith(123);
      expect(component.imageWidth).toEqual(400);
      expect(component.imageHeight).toEqual(400);
    });

    it('should not load image if imageId is not provided', () => {
      component.imageId = undefined;
      component.loadImageById();

      expect(mockImageService.getImageById).not.toHaveBeenCalled();
    });
  });
  
});
