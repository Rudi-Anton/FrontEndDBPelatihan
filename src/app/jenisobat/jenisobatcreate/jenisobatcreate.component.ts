import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './jenisobatcreatemodel';

@Component({
  selector: 'app-jenisobatcreate',
  templateUrl: './jenisobatcreate.component.html',
  styleUrls: ['./jenisobatcreate.component.css']
})
export class JenisobatcreateComponent implements OnInit {

  dataJenisObatCreate:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataJenisObatCreate = new Data();
  }
  jenisobatCreate(dataJenisObatCreate){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdJenisObat : kode, NamaJenisObat : nama});
    debugger;
    this.http.post('http://rumahsakitsakit.herokuapp.com/api/jenisobat/' + '?' + document.cookie,JSON.stringify(this.dataJenisObatCreate),opsi)
    .subscribe((res: Response) => {
      window.location.href="./jenisobat";
    debugger;
    })
  }
}

