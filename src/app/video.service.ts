import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'

@Injectable()
export class VideoService {
   private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://my-json-server.typicode.com/puddlejumper26/json-server/video/1';
  }

  getVideo() {
    return this.http.get<any>(this.url, this.httpOptions)
    .pipe(map( (data: any) => {
      // login successful if there's a jwt token in the response
      return data;
    }));
  }
}