import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm !: FormGroup

  constructor(private fb: FormBuilder , private route:ActivatedRoute , private userService:UserService , private router:Router) {
    let formControls = {
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      phone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9 ]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),

    }
    this.updateUserForm=this.fb.group(formControls)
  }
  get firstname(){return this.updateUserForm.get('firstname')}
  get lastname(){return this.updateUserForm.get('lastname')}
  get phone(){return this.updateUserForm.get('phone')}

  ngOnInit(): void {
    let idUser =this.route.snapshot.params['id'];
    this.userService.getOneUser(idUser).subscribe(
      res=>{
        let user=res;
        this.updateUserForm.patchValue({
          firstname:user.firstname,
          lastname:user.lastname,
          phone:user.phone
        })

      },
      err=>{
        console.log(err);
      }
    )
    
  }

  updateUser(){
    let data = this.updateUserForm.value;
    let user=new User(data.firstname,data.lastname,null!,data.phone,null!,data.idUser);
    this.userService.updateUser(user).subscribe(
      res=>{
        this.router.navigate(['/people-list']);

      },
      err=>{
        console.log(err);
      }
    )

  }

}