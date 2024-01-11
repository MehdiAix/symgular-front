import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeService} from "../home.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  protected contacts :any;
  private _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
  }
  ngOnInit() {
    console.log('homeComponent')
    this.getContacts();
  }
  public  getContacts(){
    this._http.get('http://localhost:8000/home').subscribe((res) => {
      this.contacts = res;
        console.log(res)
    })
  }
}
