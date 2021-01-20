import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {

  bodyelement: any;
  sidenavelement: any;

  isActive = false;
  fixedTolbar = true;

	mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(@Inject(DOCUMENT) document, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }  

  setToggleOn(){

    this.bodyelement = document.getElementById('bodypage');
    this.bodyelement.classList.add("scrollOff");
    
  }

  setToggleOff(){
    
    this.bodyelement = document.getElementById('bodypage');
    this.bodyelement.classList.remove("scrollOff");

  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}