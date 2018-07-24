import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-pms-settings',
  templateUrl: './dashboard-pms-settings.component.html',
  styleUrls: ['./dashboard-pms-settings.component.css']
})
export class DashboardPmsSettingsComponent implements OnInit {

  private _links : Observable<any>;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this._links = this.route.snapshot.data['links'];
  }

}
