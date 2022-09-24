import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map } from 'rxjs'
import { GameResponse } from '../models/games';
import { StreamResponse } from '../models/streams'; 
import { ChannelResponse } from '../models/channel';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  clientId: string = '6mhbcladgmh3djuzokl5mo3ja7gog9';
  clientSecret: string = 'dwywlw0y47c3rzd2s3o5tc5v6nx80y';

  games = []

  streams = []

  channels = []

  getGames(){
    return this.http.get<GameResponse>(`${env.BASE_URL}/games/top`, {
    headers: {
        'Authorization': 'Bearer 1oisht5hjt3gebd1k5qzd58iu0t3gf',
        'Client-Id': '6mhbcladgmh3djuzokl5mo3ja7gog9'
    }
    })
    .pipe(map((res) => 
      res))
  }

  getStreams(){
    return this.http.get<StreamResponse>(`${env.BASE_URL}/streams`, {
      headers: {
          'Authorization': 'Bearer 1oisht5hjt3gebd1k5qzd58iu0t3gf',
          'Client-Id': '6mhbcladgmh3djuzokl5mo3ja7gog9'
      }
      })
      .pipe(map((res) => 
        res))
  }

  searchChannels(search: any){
    return this.http.get<ChannelResponse>(`${env.BASE_URL}/search/channels`, {
      headers: {
          'Authorization': 'Bearer 1oisht5hjt3gebd1k5qzd58iu0t3gf',
          'Client-Id': '6mhbcladgmh3djuzokl5mo3ja7gog9'
      }, 
      params: new HttpParams().set('query', search)
      })
      .pipe(map((res) => 
        res))
  }
}
