import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { babydata } from '../babydata/babydatamodel';
import { vaccinemodel } from '../vaccinemodel/vaccinemodel';

@Component({
  selector: 'app-editvaccinedata',
  templateUrl: './editvaccinedata.component.html',
  styleUrls: ['./editvaccinedata.component.css']
})
export class EditvaccinedataComponent {
  public dataid !: number;
  public fetcheddata !: vaccinemodel;

  constructor(private api: ApiService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
    })
    this.api.fetchvaccinedata(this.dataid).subscribe((data: vaccinemodel) => {
      this.fetcheddata = data;
    })
  }

  onEdit() {
    this.api.updatevaccinedata(this.fetcheddata, this.dataid).subscribe((res: vaccinemodel) => {
      this.router.navigate(["/info"])
    })
  }

}
