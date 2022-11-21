// Base
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// Models
import { Marca } from 'src/app/models/marca';
import { Cubo } from 'src/app/models/cubo';
// Service
import { CubosServiceService } from 'src/app/services/cubos-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
// Rutas
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public marcas!: Marca[];
  public cubos!: Cubo[];

  constructor(
    private cubosService: CubosServiceService,
    private authService: AuthServiceService
  ) {}

  logout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.cubosService.getMarcas().subscribe((res) => (this.marcas = res));
    this.cubosService.getCubos().subscribe((res) => (this.cubos = res));
  }
}
