import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { babydata } from '../babydata/babydatamodel';
import { Router } from '@angular/router';
import { vaccinemodel } from '../vaccinemodel/vaccinemodel';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  babyNames: string[] = [];
  searchQuery !: string;
  vaccinedata !: vaccinemodel[];

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.fetchBabyNames();
    this.getVaccinedata();
  }

  fetchBabyNames() {
    this.api.getBabyNames().subscribe(
      data => {
        this.babyNames = data.map(post => post.babyname);
      },
      error => {
        console.error('Failed to fetch baby names:', error);
      }
    );
  }

  getVaccinedata(){
    this.api.getvaccineinfo().subscribe(data => {
      this.vaccinedata = data;
    })
  }

  searchBabyDetails() {
    if (this.searchQuery) {
      const matchedBabyName = this.babyNames.find(name => name.toLowerCase() === this.searchQuery.toLowerCase());
      if (matchedBabyName) {
        this.router.navigate(['/vaccineform'], { queryParams: { babyName: matchedBabyName } });
      } else {
        alert('No baby name found matching the search query.');
      }
    }
  }

  onDelete(id: number){
    this.api.deletevaccinedata(id).subscribe(res => {
      this.getVaccinedata();
    });
  }
}

