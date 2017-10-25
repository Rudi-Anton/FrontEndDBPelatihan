import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './provinsicreatemodel';

@Component({
  selector: 'app-provinsicreate',
  templateUrl: './provinsicreate.component.html',
  styleUrls: ['./provinsicreate.component.css']
})
export class ProvinsicreateComponent implements OnInit {

  dataProvinsiCreate:Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataProvinsiCreate = new Data();
  }
  provinsiCreate(dataProvinsiCreate){
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdProvinsi : kode, NamaProvinsi : nama});
    debugger;
    this.http.post('http://rumahsakitsakit.herokuapp.com/api/provinsi/' + '?' + document.cookie,JSON.stringify(this.dataProvinsiCreate),opsi)
    .subscribe((res: Response) => {
      window.location.href="./provinsi";
    debugger;
    })
  }
}
