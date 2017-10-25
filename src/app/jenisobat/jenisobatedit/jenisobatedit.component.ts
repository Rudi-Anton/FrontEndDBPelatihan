import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-jenisobatedit',
  templateUrl: './jenisobatedit.component.html',
  styleUrls: ['./jenisobatedit.component.css']
})
export class JenisobateditComponent implements OnInit {

  dataJenisObatEdit: Object;
  idJenisObat: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idJenisObat = params['id'];
    })
  }

  ngOnInit() {
    this.idJenisObat;
    this.dataJenisObatEdit;
    this.http.get('http://rumahsakitsakit.herokuapp.com/api/jenisobat/' + this.idJenisObat + '?' + document.cookie)
      .subscribe((res: Response) => {
        this.dataJenisObatEdit = res.json();
      })
  }

  EditJenisObat(id) {
    this.http.put('http://rumahsakitsakit.herokuapp.com/api/jenisobat/' + id + '?' + document.cookie, this.dataJenisObatEdit)
      .subscribe((res: Response) => {
        window.location.href = "./jenisobat";
      })
  }


}

