import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CubosServiceService } from 'src/app/services/cubos-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cubos!: Cubo[];

  constructor(private cubosService: CubosServiceService) {}

  ngOnInit(): void {
    this.cubosService.getCubos().subscribe((res) => {
      this.cubos = res;
    });
  }
}
