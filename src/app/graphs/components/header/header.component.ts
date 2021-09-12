import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>{{title}} Graph</h1>
    </header>
  `,
  styles: [`
    @import '/src/styles.scss';

    header{
      width: calc(100vw - 200px);
      background-color: $blue_green;
      min-height: 60px;
      display: flex;
      align-items: center;
      filter: drop-shadow(0 0 2px #999);

      h1{
        padding-left: .7rem;
        text-transform: uppercase;
        color: #fff;
      }
}
  `]
})
export class HeaderComponent implements OnInit {

  title: string = '';

  constructor(private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe({
      next: value => this.title = value[0].path
    })
  }

}
