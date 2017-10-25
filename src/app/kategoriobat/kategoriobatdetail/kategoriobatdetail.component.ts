import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-kategoriobatdetail',
  templateUrl: './kategoriobatdetail.component.html',
  styleUrls: ['./kategoriobatdetail.component.css']
})
export class KategoriobatdetailComponent implements OnInit {

  dataKategoriObatDetail: Object;
  idKategoriObat: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idKategoriObat = params['id'];
     })
   }
    
  ngOnInit() {
    this.idKategoriObat;
   
      this.http.get('http://rumahsakitsakit.herokuapp.com/api/kategoriobat/' + this.idKategoriObat + '?' + document.cookie)
        .subscribe((res: Response) => {
          this.dataKategoriObatDetail = res.json();
          
        })
    }
}