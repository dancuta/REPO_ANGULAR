import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUtils {

  public static readonly BASE_URL = 'http://localhost:3001';
  public static readonly RESERVATION_BASE_URL = AppUtils.BASE_URL+"/reservations";

}
