import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../video.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videoData: any = {};
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideo().subscribe(data => {
      this.videoData = data;
      this.videoData.url = 'https://www.w3schools.com/html/mov_bbb.mp4';
      setTimeout(() => {
          let audioPlayer = <HTMLVideoElement> document.getElementById('video1');
          audioPlayer.play();
          // document.getElementById('video1').play();
      }, 1000);
    }, (error) => {
      this.videoData.url = 'https://www.w3schools.com/html/mov_bbb.mp4';
      setTimeout(() => {
          let audioPlayer = <HTMLVideoElement> document.getElementById('video1');
          audioPlayer.play();
          // document.getElementById('video1').play();
      }, 1000);
    console.log('error', error)
  })
  }
}
