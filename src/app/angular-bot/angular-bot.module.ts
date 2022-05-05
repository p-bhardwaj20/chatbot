import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from '../chat/chat.component';
import { ChatService } from '../chat.service';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  providers: [ChatService]
})
export class AngularBotModule { }
