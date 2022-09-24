import { Component, OnInit } from '@angular/core';
import { Channel, ChannelResponse } from 'src/app/models/channel';
import { GameResponse, Games } from 'src/app/models/games';
import { Streams, StreamResponse } from 'src/app/models/streams';
import { HttpClientService } from 'src/app/services/http-client.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Array<Games> = []

  streams: Array<Streams> = []

  channels: Array<Channel> = []

  search = new FormControl('')

  constructor(private http: HttpClientService, 
    ) { }

  ngOnInit(): void {
    this.loadGames(),
    this.loadStreams()
  }

  loadGames(){
    this.http.getGames().subscribe((res: GameResponse) => {
      this.games = res.data
    })
  }

  loadStreams(){
    this.http.getStreams().subscribe((res: StreamResponse) => {
      this.streams = res.data
    })
  }

  loadChannels(){
    this.http.searchChannels(this.search.value).subscribe((res: ChannelResponse) => {
      this.channels = res.data
    })
  }

  onChange(){
    this.loadChannels()
  }
}
