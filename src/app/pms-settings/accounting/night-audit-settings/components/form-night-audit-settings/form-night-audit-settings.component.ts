import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { NightAuditSetting } from '../../../../../interfaces/night-audit-setting';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { FormBuilder } from '../../../../../../../node_modules/@angular/forms';
import { NightAuditSettingsService } from '../../../../services/night-audit-settings.service';

@Component({
  selector: 'app-form-night-audit-settings',
  templateUrl: './form-night-audit-settings.component.html',
  styleUrls: ['./form-night-audit-settings.component.css']
})
export class FormNightAuditSettingsComponent implements OnInit, OnDestroy {

  private _subscription = new Subscription();
  private runTimes: NightAuditSetting[]=[
    {
       id:1, time:"12:00 AM", runNightAudit:false
    },
    {
      id:2, time:"1:00 AM", runNightAudit:false
    },
    {
      id:3, time:"2:00 AM", runNightAudit:false
    },
    {
      id:4, time:"3:00 AM", runNightAudit:false
    },
    {
      id:5, time:"4:00 AM", runNightAudit:false
    },
    {
      id:6, time:"5:00 AM", runNightAudit:false
    },
    {
      id:7, time:"6:00 AM", runNightAudit:false
    },
    {
      id:8, time:"7:00 AM", runNightAudit:false
    },
    {
      id:9, time:"8:00 AM", runNightAudit:false
    },
    {
      id:10, time:"9:00 AM", runNightAudit:false
    },
    {
      id:11, time:"10:00 AM", runNightAudit:false
    },
    {
      id:12, time:"11:00 AM", runNightAudit:false
    },
    {
      id:13, time:"12:00 PM", runNightAudit:false
    },
    {
      id:14, time:"1:00 PM", runNightAudit:false
    },
    {
      id:15, time:"2:00 PM", runNightAudit:false
    },
    {
      id:16, time:"3:00 PM", runNightAudit:false
    },
    {
      id:17, time:"4:00 PM", runNightAudit:false
    },
    {
      id:18, time:"5:00 PM", runNightAudit:false
    },
    {
      id:19, time:"6:00 PM", runNightAudit:false
    },
    {
      id:20, time:"7:00 PM", runNightAudit:false
    },
    {
      id:21, time:"8:00 PM", runNightAudit:false
    },
    {
      id:22, time:"9:00 PM", runNightAudit:false
    },
    {
      id:23, time:"10:00 PM", runNightAudit:false
    },
    {
      id:24, time:"11:00 PM", runNightAudit:false
    },
  ];

  private default : object = {
    RunNightAudit:0
  }
  formNightAuditSettings : any;
  constructor(
    private location:Location,
    private formBuilder:FormBuilder,
    private nightAuditSettingsServices:NightAuditSettingsService
  ) { }

  ngOnInit() {
    this.formNightAuditSettings=this.formBuilder.group({
      runNightAudit:[],
      time:[]
      
    });
  }

  addData(){
    this._subscription.add(this.nightAuditSettingsServices.getAll().subscribe(
      
        (data:any[])=>{
          data=data.concat({
            runNightAudit:this.formNightAuditSettings.get('runNightAudit').value,
            time:this.formNightAuditSettings.get('time').value
          });
          console.log(data);
        }
      
    ));
  }

  goBack(){
    this.location.back();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
