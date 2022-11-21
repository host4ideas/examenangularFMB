// Base
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// Model
// Models
import { User } from 'src/app/models/user';
// Service
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CubosServiceService } from 'src/app/services/cubos-service.service';
// Rutas
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Form inputs
  @ViewChild('cajaUsuario') cajaUsuario!: ElementRef;
  @ViewChild('cajaPass') cajaPass!: ElementRef;

  constructor(
    private cubosService: CubosServiceService,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  login(): void {
    const user = this.cajaUsuario.nativeElement.value;
    const pass = this.cajaPass.nativeElement.value;

    if (user && pass) {
      const loginUser = {
        email: user,
        password: pass,
      };

      this.authService.login(loginUser);
    }
  }

  ngOnInit(): void {
    this.authService.checkUser().then((user) => {
      if (user) {
        this.router.navigate(['/perfil']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
