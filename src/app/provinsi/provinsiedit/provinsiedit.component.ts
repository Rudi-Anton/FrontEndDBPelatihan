import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-provinsiedit',
  templateUrl: './provinsiedit.component.html',
  styleUrls: ['./provinsiedit.component.css']
})
export class ProvinsieditComponent implements OnInit {

  dataProvinsiEdit: Object;
  idProvinsi: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idProvinsi = params['id'];
    })
  }

  ngOnInit() {
    this.idProvinsi;
    this.dataProvinsiEdit;
    this.http.get('http://rumahsakitsakit.herokuapp.com/api/provinsi/' + this.idProvinsi + '?' + document.cookie)
      .subscribe((res: Response) => {
        this.dataProvinsiEdit = res.json();
      })
  }

  EditProvinsi(id) {
    this.http.put('http://rumahsakitsakit.herokuapp.com/api/provinsi/' + id + '?' + document.cookie, this.dataProvinsiEdit)
      .subscribe((res: Response) => {
        window.location.href = "./provinsi";
      })
  }


}
