import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './kategoriobatcreatemodel';

@Component({
  selector: 'app-kategoriobatcreate',
  templateUrl: './kategoriobatcreate.component.html',
  styleUrls: ['./kategoriobatcreate.component.css']
})
export class KategoriobatcreateComponent implements OnInit {

  dataKategoriObatCreate:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataKategoriObatCreate = new Data();
  }
  kategoriobatCreate(dataKategoriObatCreate){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdKategoriObat : kode, NamaKategoriObat : nama});
    debugger;
    this.http.post('http://rumahsakitsakit.herokuapp.com/api/kategoriobat/' + '?' + document.cookie,JSON.stringify(this.dataKategoriObatCreate),opsi)
    .subscribe((res: Response) => {
      window.location.href="./kategoriobat";
    debugger;
    })
  }
}