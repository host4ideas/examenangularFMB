// Base
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// Models
import { Cubo } from 'src/app/models/cubo';
// Service
import { CubosServiceService } from 'src/app/services/cubos-service.service';
// Rutas
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-cubos-marca',
  templateUrl: './cubos-marca.component.html',
  styleUrls: ['./cubos-marca.component.css'],
})
export class CubosMarcaComponent implements OnInit {
  public cubos!: Cubo[];
  public marca!: string;

  constructor(
    private cubosService: CubosServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  redirect(num: number) {
    this.router.navigate(['numerodoble', num]);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const marca = params.get('marca')!;
      this.marca = marca;
      this.cubosService.getCubosMarca(marca).subscribe((res) => {
        this.cubos = res;
      });
    });
  }
}
