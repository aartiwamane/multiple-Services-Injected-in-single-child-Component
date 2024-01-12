import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers :[NumberService,StringService]
})
export class ChildComponent 
{
  public Value : number = 0;
  public Word :string ="Aarti Wamane"

  public CheckPrime : any;

  constructor(private obj :StringService,private obj2 : NumberService)
  {
    this.Value = obj.CountCapital(this.Word)
    this.CheckPrime = obj2.CheckPrime(20)
  }
}
 
