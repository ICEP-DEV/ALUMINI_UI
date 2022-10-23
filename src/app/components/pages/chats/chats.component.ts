import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  search = new FormControl('');

  headerTitle = "#LET'S CONNECT";
  // headerDescription="Read, watch, listen. #TUT_ALUMNI ahare their experiences, perspectives, and commnunity engagements.";
  backgroundImg="../../../../assets/";

  constructor() { }

  ngOnInit(): void {
  }

}
