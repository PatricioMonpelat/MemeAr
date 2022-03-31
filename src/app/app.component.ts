import { Component } from '@angular/core';
import axios from 'axios';

export interface imagetypes{
  type: string,
  id: string,
  url: string,
  slug:string,
  bitlygifurl: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'memeAr';
  imagePath = '';
  gifPath='';
  randomImgUrl='https://picsum.photos/536/354';
  imageLogo= 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a816f98-6c2a-4d39-b48b-cc21736d55f3/d4utay6-4fdfad3f-96ae-4746-b63f-caa469558cb3.png/v1/fill/w_900,h_810,strp/meme_png_by_yazsexydilemma_d4utay6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODEwIiwicGF0aCI6IlwvZlwvMWE4MTZmOTgtNmMyYS00ZDM5LWI0OGItY2MyMTczNmQ1NWYzXC9kNHV0YXk2LTRmZGZhZDNmLTk2YWUtNDc0Ni1iNjNmLWNhYTQ2OTU1OGNiMy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.hMYgKmN2Pnd8WpbNN4JhCnGs6QNQB_-0ofKbW98h1rs';
  gifs = [];

  getRandomImgUrl() {
    return this.randomImgUrl + '?cache=' + new Date().getTime()
  }

  getImage(){
     this.imagePath = this.getRandomImgUrl();
  }

  getGif(){
    axios.get("https://api.imgflip.com/get_memes")
    .then((response)  =>  {
      let num = 0;
      num = this.getRandomArbitrary(0,100);
      this.gifs = response.data.data.memes[num];
      this.gifPath = response.data.data.memes[num].url;
    }, (error)  =>  {

    })
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min );
  }


}
