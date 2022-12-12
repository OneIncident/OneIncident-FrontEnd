import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../model/auth.service';
import { User } from '../../model/user.model';

@Component({
  templateUrl: "auth.component.html"
})
export class AuthComponent implements OnInit
{
  public user: User;
  public errorMessage: string;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void
  {
    //console.log('->Debug -> at the Auth Component');
    this.user = new User();
  }

  authenticate(form: NgForm): void
  {
    if (form.valid)
    {
      console.log("IF FORM IS VALID");
      // perform authentication
      this.auth.authenticate(this.user).subscribe(
        (res) => {
        console.log("Try to Authenticate")
       
        console.log(" AUTHENTICATION!!!!");
        console.log(res);
        this.auth.storeUserData(res.token, res.user);
        this.router.navigateByUrl('/admin/main');
          
        },
        (err) => {
          console.log(err);
        });
      }
    }
    // }
    // else
    // {
    //   console.log("UNSUCCESSFUL AUTHENTIATION!!!")
    //   this.errorMessage = 'Form Data Invalid';
    // }
  

}