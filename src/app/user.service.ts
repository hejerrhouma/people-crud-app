import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getAllUsersUrl = "https://jsonplaceholder.typicode.com/users";
  private getOneUserUrl ="https://jsonplaceholder.typicode.com/users";
  private deleteUserUrl ="https://backend-people-crud-app.herokuapp.com/users/";
  private addUserUrl ="https://backend-people-crud-app.herokuapp.com/users/add";
  private updateUserUrl="https://jsonplaceholder.typicode.com/users/update";

  constructor(private http:HttpClient) { }


  getAllUsers(){
    return this.http.get<any>(this.getAllUsersUrl);
    
  }
  getOneUser(id:string){
    return this.http.get<any>(this.getOneUserUrl+id);

  }

  deleteUser(id:String){
    return this.http.delete<any>(this.deleteUserUrl+id);
  }

  addUser(user:User){
    return this.http.post<any>(this.addUserUrl,user)

  }

  updateUser(user:User){
    return this.http.put<any>(this.updateUserUrl,user)
  }


 
}
                            