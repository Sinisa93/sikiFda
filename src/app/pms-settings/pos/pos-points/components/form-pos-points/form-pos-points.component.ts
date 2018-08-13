import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../../../../../node_modules/@angular/forms';
import { PosPointsService } from '../../../../services/pos-points.service';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { PosPoint } from '../../../../../interfaces/pos-point';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';
import { PosPointsDataService } from '../../../../services/pos-points-data.service';

@Component({
  selector: 'app-form-pos-points',
  templateUrl: './form-pos-points.component.html',
  styleUrls: ['./form-pos-points.component.css']
})
export class FormPosPointsComponent implements OnInit, OnDestroy {

  constructor(
    public formPosPointsDialogRef:MatDialogRef<FormPosPointsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private posPointsService:PosPointsService,
    private posPointsDataService:PosPointsDataService
    // data service
  ) { }

  private _posPoints:Observable<PosPoint[]>;
  private formPosPoints:FormGroup=this.formBuilder.group({
    id:[],
    title:['', Validators.required],
    description:[],
    status:[]
  });
  
  private subscription=new Subscription();

  ngOnInit() {
    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      this._posPoints=this.posPointsService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formPosPoints.patchValue(items[0]);
          
        })
      )
    }
  }

  addData(){
    this.subscription.add(this.posPointsService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          id:8,
          title:this.formPosPoints.get('title').value,
          description:this.formPosPoints.get('description').value,
          status:this.formPosPoints.get('status').value
        });

        this.posPointsDataService.posPointsData.next(data);
      }
    ));

    this.formPosPointsDialogRef.close(this.formPosPoints.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
