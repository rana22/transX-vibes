import { Injectable, Inject } from '@angular/core';
// import { LocalStorage } from '@ngx-pwa/local-storage';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
     
}

saveData(key, val): void {
  this.storage.set(key, val);
 }

 getData(key){
   return this.storage.get(key);
 }

 removeItem(key){
   this.storage.remove(key);
 }
 
}
