import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = '';

  chartColorScheme = {
    domain: ['#3C9D4E', '#7031AC', '#C94D6D', '#E4BF58', '#4174C9']
  };

  chartData = [
    {
      "name": "Hungary",
      "value": 12
    },
    {
      "name": "Italy",
      "value": 7
    },
    {
      "name": "Serbia",
      "value": 4
    },
    {
      "name": "Spain",
      "value": 4
    },
    {
      "name": "Croatia",
      "value": 3
    }
  ];

  constructor(private themeService: ThemeService){
  }

  ngOnInit(): void {
    this.themeService.initialize();
    this.update();
  }

  changeTheme(theme: string){
    this.themeService.changeTheme(theme);
    this.update();
  }

  update(){   
    this.title = this.themeService.getCurrentTheme();

    let domainColors = [];

    switch (this.title){
      case Theme.Light:
        domainColors = ['#3C9D4E', '#7031AC', '#C94D6D', '#E4BF58', '#4174C9'];
        break;
      case Theme.Dark:
        domainColors = ['#63B171', '#8D5ABD', '#D4718A', '#E9CC79', '#6790D4'];
        break;
      case Theme.Alternate:
        domainColors = ['#03254C', '#1167B1', '#187BCD', '#2A9DF4', '#D0EFFF'];
        break;
      default:
        domainColors = ['#3C9D4E', '#7031AC', '#C94D6D', '#E4BF58', '#4174C9'];
        break;    
    }

    this.chartColorScheme = {
      domain: domainColors
    };
  }

}
