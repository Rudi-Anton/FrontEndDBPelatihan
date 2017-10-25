import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public KdKategoriObat : string;
    public KdJenisObat : string;
    public NamaJenisObat : string;
}