import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from '../chat/chat.component';
import { ChatService } from '../chat.service';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ChatService]
})
export class AngularBotModule { }
