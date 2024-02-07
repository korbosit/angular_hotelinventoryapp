import { Component } from '@angular/core';
import { Room } from './rooms';
// import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [NgIf],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
