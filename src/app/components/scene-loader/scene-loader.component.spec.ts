import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneLoaderComponent } from './scene-loader.component';

describe('SceneLoaderComponent', () => {
  let component: SceneLoaderComponent;
  let fixture: ComponentFixture<SceneLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
