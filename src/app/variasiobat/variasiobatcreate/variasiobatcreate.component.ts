import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './variasiobatcreatemodel';

@Component({
  selector: 'app-variasiobatcreate',
  templateUrl: './variasiobatcreate.component.html',
  styleUrls: ['./variasiobatcreate.component.css']
})
export class VariasiobatcreateComponent implements OnInit {

  dataVariasiObatCreate:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataVariasiObatCreate = new Data();
  }
  variasiobatCreate(dataVariasiObatCreate){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdVariasiObat : kode, NamaVariasiObat : nama});
    debugger;
    this.http.post('http://rumahsakitsakit.herokuapp.com/api/variasiobat/' + '?' + document.cookie,JSON.stringify(this.dataVariasiObatCreate),opsi)
    .subscribe((res: Response) => {
      window.location.href="./variasiobat";
    debugger;
    })
  }
}


