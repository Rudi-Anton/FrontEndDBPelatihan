import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-variasiobatedit',
  templateUrl: './variasiobatedit.component.html',
  styleUrls: ['./variasiobatedit.component.css']
})
export class VariasiobateditComponent implements OnInit {

  dataVariasiObatEdit: Object;
  idVariasiObat: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idVariasiObat = params['id'];
    })
  }

  ngOnInit() {
    this.idVariasiObat;
    this.dataVariasiObatEdit;
    this.http.get('http://rumahsakitsakit.herokuapp.com/api/variasiobat/' + this.idVariasiObat + '?' + document.cookie)
      .subscribe((res: Response) => {
        this.dataVariasiObatEdit = res.json();
      })
  }

  EditVariasiObat(id) {
    this.http.put('http://rumahsakitsakit.herokuapp.com/api/variasiobat/' + id + '?' + document.cookie, this.dataVariasiObatEdit)
      .subscribe((res: Response) => {
        window.location.href = "./variasiobat";
      })
  }


}
