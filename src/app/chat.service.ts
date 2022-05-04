import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export class Message{
  constructor(public author: string, public content: string){}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  conversation = new Subject<Message[]>();
  messageMap: any = {
    "hi": "Hello",
    "who are you": "Hi, I am Altena.",
    "what is your name": "My name is Altena",
    "what do you do": " will be guiding you with your queries",
    "what is your role": "I will be guiding you with your queries",
    "who created you": "I was created by Pratyush.",
    "how are you": "never been better",
    "bye": "See you, have a nice day!",
    "thank you": "you're welcome", 
    "defaultmsg": "I cant understand your text. Can you please repeat?"
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}
