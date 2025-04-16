import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css',
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl! : string;

  ngOnInit(): void {
    this.title = 'AlxExo';
    this.description = 'First angular exo';
    this.createdAt = new Date;
    this.snaps = 0;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2025/04/13/16/28/birds-9532011_1280.jpg';
  }

  onAddSnap(): void {
    this.snaps++;
  }
}
