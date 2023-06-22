import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { babydata } from '../babydata/babydatamodel';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent {

  babydata !: FormGroup;

  constructor(private formbuilder:FormBuilder, private api:ApiService){}

  ngOnInit() : void{
    this.babydata = this.formbuilder.group({
      babyname:['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      gender: ['', Validators.required],
      fathername: ['', Validators.required],
      fathercontact: ['', Validators.required],
      mothername: ['', Validators.required],
      mothercontact: ['', Validators.required],
      address: ['', Validators.required]
      // duration: ['', Validators.required],
      // dose: ['', Validators.required],
      // comment: ['', Validators.required]
    })
  }

  onSave(data: babydata){
    this.api.postbabydata(data).subscribe((res=>{
      this.babydata.reset();
    }))
  }

}
