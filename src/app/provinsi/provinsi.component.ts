import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.component.html',
  styleUrls: ['./provinsi.component.css']
})
export class ProvinsiComponent implements OnInit {

  dataProvinsi: Object;
  idProvinsi: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://rumahsakitsakit.herokuapp.com/api/provinsi' + '?' + document.cookie)
      .subscribe((res: Response) => {
        this.dataProvinsi = res.json();
      })
  }
  provinsiDelete(idProvinsi) {
    this.http.delete('http://rumahsakitsakit.herokuapp.com/api/provinsi/' + idProvinsi + '?' + document.cookie)
      .subscribe((res: Response) => {
        window.location.href = "./provinsi";
      })
  }

}
