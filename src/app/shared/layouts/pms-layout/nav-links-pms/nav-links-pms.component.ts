import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-links-pms',
  templateUrl: './nav-links-pms.component.html',
  styleUrls: ['./nav-links-pms.component.css']
})
export class NavLinksPmsComponent implements OnInit {

  private _links : Observable<any>;
  
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this._links = this.route.snapshot.data['links'];
  }

}
