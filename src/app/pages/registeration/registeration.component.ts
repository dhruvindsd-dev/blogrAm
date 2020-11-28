import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent implements OnInit {
  @ViewChild('imgUpload') input: ElementRef;
  @ViewChild('imgPreview') preview: ElementRef;
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
      const formData = new FormData();
      formData.append('username', form.value.username);
      formData.append('password', form.value.password);
      formData.append('email', form.value.email);
      if (this.input.nativeElement.files[0]) {
        formData.append('img', this.input.nativeElement.files[0]);
      }
      authObj = this.authService.signUp(formData);
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
  handleImg() {
    let file = this.input.nativeElement.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.preview.nativeElement.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
