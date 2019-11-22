import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  color: string;
  title = 'angular-chrome-extension';

  constructor(private zone: NgZone) {

  }

  public colorize() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs: Tab[]) => {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: `document.body.style.backgroundColor = "${this.color}";`}
      );
    });
  }

  public updateColor(color: string) {
    chrome.storage.sync.set({color});
  }

  ngOnInit(): void {
    chrome.storage.sync.get('color', ({color}) => {
      this.zone.run(() => {
        this.color = color;
      });
    });
  }
}
