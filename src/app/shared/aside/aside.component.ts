import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: [`
    @import '/src/styles.scss';

    .aside{
      width: 200px;
      min-height: 100vh;
      background-color: $linen;
      filter: drop-shadow(0px 0 2px #999);


      h1{
        width: 90%;
        margin: 0 auto;
        padding: 1rem .2rem;
        font-size: 2rem;
        text-transform: uppercase;
        color: $dark_brown;
      }
    }


    .keypad{
      list-style: none;
      width: 90%;
      margin: 0 auto;
      background-color: $olive_drab_7;
      border-radius: .5rem;
      filter: drop-shadow(0 0 2px #333);
      overflow: hidden;
    }

    .keypad__item{
      padding: .7rem;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }

    .active{
      background-color: $dark_brown;
    }
  `]
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
