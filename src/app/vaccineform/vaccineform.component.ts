import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { vaccinemodel } from '../vaccinemodel/vaccinemodel';

@Component({
  selector: 'app-vaccineform',
  templateUrl: './vaccineform.component.html',
  styleUrls: ['./vaccineform.component.css']
})
export class VaccineformComponent {
  babyName !: string;
  vaccinedata !: FormGroup;

  constructor(private route: ActivatedRoute,private formbuilder:FormBuilder, private api:ApiService) {
    this.route.queryParams.subscribe(params => {
      this.babyName = params['babyName'];
    });
  }

  ngOnInit() : void{
    this.vaccinedata = this.formbuilder.group({
      babyname:['', Validators.required],
      duration: ['', Validators.required],
      dose: ['', Validators.required],
      comment: ['', Validators.required]
    })
  }

  saveBabyDetails(data: vaccinemodel) {
    this.api.postvaccinedata(data).subscribe((res=>{
      this.vaccinedata.reset();
    }))
  }

}
