import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { washPackage } from '../Models/washPackage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WashPackageService {
  basApiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }
  
  getAllWashPackage(): Observable<washPackage[]>{
    return this.http.get<washPackage[]>(this.basApiUrl + '/api/WashPackage');
   }

  addWashPackage(addWashPackage:washPackage): Observable<washPackage>{
   return this.http.post<washPackage>(this.basApiUrl + '/api/WashPackage',addWashPackage);
  }
  
  getWashPackageById(id:string): Observable<washPackage>{
    return this.http.get<washPackage>(this.basApiUrl + '/api/WashPackage/'+id);
  }
  updateWashPackage(id:string ,updatePackage:washPackage): Observable<washPackage>{
    return this.http.put<washPackage>(this.basApiUrl+ '/api/WashPackage/'+id,updatePackage);
  }
  deleteWashPackage(id:string): Observable<washPackage>{
    return this.http.delete<washPackage>(this.basApiUrl + '/api/WashPackage/'+id);
  }

}
