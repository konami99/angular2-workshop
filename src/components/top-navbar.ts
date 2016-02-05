import {Component} from'angular2/core';

@Component({
  selector: 'top-navbar',
  template: `
      <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">RESTAURANT</a>
        </div>
        <ul class="nav navbar-nav">
          <li><a href="#">tables</a></li>
          <li><a href="#">history</a></li>
        </ul>
        <button class="btn btn-default navbar-btn navbar-right">
          ADD TABLE &nbsp;<span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </nav>
    `
})

export class TopNavBar {}