import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public KdVariasiObat : string;
    public KdKategoriObat : string;
    public KdJenisObat : string;
    public NamaVariasiObat : string;
    public HargaVariasiObat : string;
}