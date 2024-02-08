import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
// import { CommonModule } from '@angular/common';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = { totalRooms: 20, availableRooms: 10, bookedRooms: 5 };
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.101hotelscdn.ru%2Fuploads%2Fimage%2Fhotel_image%2F4854%2F855183_preview.jpg&tbnid=TjryzZB2Uu5_bM&vet=12ahUKEwjA-e6V4puEAxX1hf0HHSDjC8EQMygIegQIARBi..i&imgrefurl=https%3A%2F%2F101hotels.com%2Frussia%2Fregion%2Fpovolzhie%2F5stars&docid=ntah9OBxlqZI9M&w=582&h=436&q=%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%205%20%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4&ved=2ahUKEwjA-e6V4puEAxX1hf0HHSDjC8EQMygIegQIARBi',
      chekinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 2,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Farbat-inn.com%2Ftemplates%2Fshaper_helix3%2Fimages%2Fneobuch%2Fgost5.jpg&tbnid=8zalJJNNTamJ9M&vet=12ahUKEwjA-e6V4puEAxX1hf0HHSDjC8EQMygAegQIARBS..i&imgrefurl=https%3A%2F%2Farbat-inn.com%2Fblog%2Fklassifikaciya-gostinic-zvezdnost.html&docid=b8kkIEiRw4DB-M&w=1024&h=683&q=%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%205%20%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4&ved=2ahUKEwjA-e6V4puEAxX1hf0HHSDjC8EQMygAegQIARBS',
      chekinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.unitours.ru%2Fupload%2Fmedialibrary%2Fd9c%2Fd9c95b2dc5b93599c982e710935de652.jpg&tbnid=thdvo7V5nlDznM&vet=12ahUKEwjA-e6V4puEAxX1hf0HHSDjC8EQMygKegQIARBm..i&imgrefurl=https%3A%2F%2Fwww.unitours.ru%2Fcountries%2Fturkey%2Fturkey-5-stars%2F&docid=SJbKVHuK6agR4M&w=1000&h=482&q=%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%205%20%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4&ved=2ahUKEwjA-e6V4puEAxX1hf0HHSDjC8EQMygKegQIARBm',
      chekinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
