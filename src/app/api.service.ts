import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { babydata } from './babydata/babydatamodel';
import { vaccinemodel } from './vaccinemodel/vaccinemodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:3000/posts/";
  vaccineurl : string = "http://localhost:3000/comments/";

  constructor(private http: HttpClient) { }

  postbabydata(data: babydata) {
    return this.http.post<babydata>(this.url, data);
  }

  getBabiesInfo() {
    return this.http.get<[babydata]>(this.url);
  }

  fetchbabiesdata(id: number) {
    return this.http.get<babydata>(this.url + id);
  }

  updatebabiesdata(data: babydata, id: number) {
    return this.http.put<babydata>(this.url + id, data)
  }

  deletedata(id: number) {
    return this.http.delete<babydata>(this.url + id);
  }

  searchBabyByName(searchTerm: string){
    return this.http.get<[babydata]>(this.url);
  }

  getBabyNames(){
    return this.http.get<[babydata]>(this.url);
  }

  postvaccinedata(data: vaccinemodel){
    return this.http.post<vaccinemodel>(this.vaccineurl, data);
  }

  getvaccineinfo(){
    return this.http.get<[vaccinemodel]>(this.vaccineurl);
  }

  fetchvaccinedata(id: number){
    return this.http.get<vaccinemodel>(this.vaccineurl + id);
  }

  updatevaccinedata(data: vaccinemodel, id: number){
    return this.http.put<vaccinemodel>(this.vaccineurl + id, data)
  }

  deletevaccinedata(id: number){
    return this.http.delete<vaccinemodel>(this.vaccineurl + id);
  }

}
