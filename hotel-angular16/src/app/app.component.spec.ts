import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { ContentComponent } from "./content/content.component";


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:
      [RouterTestingModule
      ],
    declarations: [AppComponent,
      HeaderComponent,
      NavigationBarComponent,
      ContentComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hotel-angular16'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hotel-angular16');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span[name="title"]')?.textContent).toContain('Hotel Reservation');
  });
});
