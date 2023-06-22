import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { babydata } from '../babydata/babydatamodel';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public dataid !: number;
  public fetcheddata !: babydata;

  constructor(private api: ApiService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
    })
    this.api.fetchbabiesdata(this.dataid).subscribe((data: babydata) => {
      this.fetcheddata = data;
    })
  }

  onEdit() {
    this.api.updatebabiesdata(this.fetcheddata, this.dataid).subscribe((res: babydata) => {
      this.router.navigate(["/record"])
    })
  }

}
