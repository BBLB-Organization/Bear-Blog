import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentsComponent } from './create-comments.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateCommentsComponent', () => {
  let component: CreateCommentsComponent;
  let fixture: ComponentFixture<CreateCommentsComponent>;
  const fakeActivatedRoute = {
    snapshot: {
      paramMap: convertToParamMap({ blogId: '123' })
    }
  } as ActivatedRoute;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCommentsComponent],
      imports: [HttpClientTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: fakeActivatedRoute
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
