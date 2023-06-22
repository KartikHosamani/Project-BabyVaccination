import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { babydata } from '../babydata/babydatamodel';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {

  babyinfo !: babydata[];

  constructor(private api:ApiService){}

  ngOnInit(): void{
    this.getBabyDetails();
  }

  getBabyDetails(){
    this.api.getBabiesInfo().subscribe(res=>{
      this.babyinfo = res;
    })
  }

  onDelete(dataid: number) {
    this.api.deletedata(dataid).subscribe(res => {
      this.getBabyDetails();
    });
  }
  
}
