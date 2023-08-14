import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../../services/loader-service/loader.service';
import { LoadingInterceptor } from './loader.interceptor';

describe('LoadingInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let loaderService: LoaderService;
  let interceptor: LoadingInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoaderService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true,
        },
        LoadingInterceptor
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    loaderService = TestBed.inject(LoaderService);
    interceptor = TestBed.inject(LoadingInterceptor);
  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should increment totalRequests and setLoading(true) when intercepting a request', () => {
    httpClient.get('/api/data').subscribe();
    expect(loaderService.loading).toBeTrue();
    const request = httpMock.expectOne('/api/data');
    expect(request.request.method).toEqual('GET');
    request.flush({});

  });

});
