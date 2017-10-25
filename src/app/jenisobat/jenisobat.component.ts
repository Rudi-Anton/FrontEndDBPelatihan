import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-jenisobat',
  templateUrl: './jenisobat.component.html',
  styleUrls: ['./jenisobat.component.css']
})
export class JenisobatComponent implements OnInit {

  dataJenisObat: Object;
  idJenisObat: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://rumahsakitsakit.herokuapp.com/api/jenisobat' + '?' + document.cookie)
      .subscribe((res: Response) => {
        this.dataJenisObat = res.json();
      })
  }
  jenisobatDelete(idJenisObat) {
    this.http.delete('http://rumahsakitsakit.herokuapp.com/api/jenisobat/' + idJenisObat + '?' + document.cookie)
      .subscribe((res: Response) => {
        window.location.href = "./jenisobat";
      })
  }

}

