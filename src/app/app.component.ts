import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  title = 'angular-chrome-extension';

  public colorize() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs: Tab[]) => {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: `document.body.style.backgroundColor = "${this.color}";`}
      );
    });
  }
}
