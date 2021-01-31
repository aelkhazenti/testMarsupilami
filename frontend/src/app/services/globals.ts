import { Injectable } from '@angular/core';
import { Pilami } from '../models/pilami';

@Injectable()
export class Globals {
  connected: boolean = false;
  currentuser :any= 0;
}