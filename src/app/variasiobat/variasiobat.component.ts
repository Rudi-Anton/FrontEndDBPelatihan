import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-variasiobat',
  templateUrl: './variasiobat.component.html',
  styleUrls: ['./variasiobat.component.css']
})
export class VariasiobatComponent implements OnInit {

  dataVariasiObat: Object;
  idVariasiObat: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://rumahsakitsakit.herokuapp.com/api/variasiobat' + '?' + document.cookie)
      .subscribe((res: Response) => {
        this.dataVariasiObat = res.json();
      })
  }
  variasiobatDelete(idVariasiObat) {
    this.http.delete('http://rumahsakitsakit.herokuapp.com/api/variasiobat/' + idVariasiObat + '?' + document.cookie)
      .subscribe((res: Response) => {
        window.location.href = "./variasiobat";
      })
  }

}

