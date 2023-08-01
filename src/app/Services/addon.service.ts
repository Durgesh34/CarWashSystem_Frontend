import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { addon } from '../Models/addonModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  basApiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }
  
  getAllWashPackage(): Observable<addon[]>{
    return this.http.get<addon[]>(this.basApiUrl + '/api/Addon');
   }
   Addaddon(addWashPackage:addon): Observable<addon[]>{
    return this.http.post<addon[]>(this.basApiUrl + '/api/Addon',addWashPackage);
   }
   getAddonById(id:string): Observable<addon>{
    return this.http.get<addon>(this.basApiUrl + '/api/Addon/'+id);
  }
  updateAddon(id:string ,updatePackage:addon): Observable<addon>{
    return this.http.put<addon>(this.basApiUrl+ '/api/Addon/'+id,updatePackage);
  }
  deleteAddon(id:string): Observable<addon>{
    return this.http.delete<addon>(this.basApiUrl + '/api/Addon/'+id);
  }
}
