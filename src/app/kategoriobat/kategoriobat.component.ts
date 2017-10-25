import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-kategoriobat',
  templateUrl: './kategoriobat.component.html',
  styleUrls: ['./kategoriobat.component.css']
})
export class KategoriobatComponent implements OnInit {

  dataKategoriObat: Object;
  idKategoriObat: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://rumahsakitsakit.herokuapp.com/api/kategoriobat' + '?' + document.cookie)
      .subscribe((res: Response) => {
        this.dataKategoriObat = res.json();
      })
  }
  kategoriobatDelete(idKategoriObat) {
    this.http.delete('http://rumahsakitsakit.herokuapp.com/api/kategoriobat/' + idKategoriObat + '?' + document.cookie)
      .subscribe((res: Response) => {
        window.location.href = "./kategoriobat";
      })
  }

}