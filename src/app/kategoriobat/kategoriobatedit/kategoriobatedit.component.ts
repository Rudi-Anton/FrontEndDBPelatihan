import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-kategoriobatedit',
  templateUrl: './kategoriobatedit.component.html',
  styleUrls: ['./kategoriobatedit.component.css']
})
export class KategoriobateditComponent implements OnInit {

  dataKategoriObatEdit: Object;
  idKategoriObat: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idKategoriObat = params['id'];
    })
  }

  ngOnInit() {
    this.idKategoriObat;
    this.dataKategoriObatEdit;
    this.http.get('http://rumahsakitsakit.herokuapp.com/api/kategoriobat/' + this.idKategoriObat + '?' + document.cookie)
      .subscribe((res: Response) => {
        this.dataKategoriObatEdit = res.json();
      })
  }

  EditKategoriObat(id) {
    this.http.put('http://rumahsakitsakit.herokuapp.com/api/kategoriobat/' + id + '?' + document.cookie, this.dataKategoriObatEdit)
      .subscribe((res: Response) => {
        window.location.href = "./kategoriobat";
      })
  }


}
