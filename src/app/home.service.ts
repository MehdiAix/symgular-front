import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor() {
  }

  API_URL  =  'http://localhost:8000';
}
