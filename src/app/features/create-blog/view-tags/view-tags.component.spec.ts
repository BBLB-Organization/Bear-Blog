import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTagsComponent } from './view-tags.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewTagsComponent', () => {
  let component: ViewTagsComponent;
  let fixture: ComponentFixture<ViewTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTagsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
