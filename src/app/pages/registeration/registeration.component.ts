import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent implements OnInit {
  isSignUpForm: boolean;
  showPassword: boolean = false;
  errorMsg: string = '';
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['type'] == 'signup') {
        this.isSignUpForm = true;
      } else if (params['type'] == 'signin') {
        this.isSignUpForm = false;
      } else {
        this.router.navigate(['']);
      }
    });
  }
  togglePasswordVisibility(el) {
    el.classList.toggle('fa-eye');
    el.classList.toggle('fa-eye-slash');
    this.showPassword = !this.showPassword;
  }
  onSubmit(form: NgForm) {
    let authObj;
    this.isLoading = true;
    if (this.isSignUpForm) {
      if (form.value) {
        authObj = this.authService.signUp(
          form.value.username,
          form.value.email,
          form.value.password
        );
      }
    } else {
      authObj = this.authService.getToken(
        form.value.email,
        form.value.password
      );
    }
    authObj.subscribe(
      (responseData) => {
        this.isLoading = false;
        this.errorMsg = '';
        this.router.navigate(['']);
      },
      (errorData) => {
        this.errorMsg = errorData;
        this.isLoading = false;
      }
    );
  }
}
