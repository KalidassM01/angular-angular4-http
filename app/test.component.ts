import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable()

export class TestComponent{
constructor(private http:HttpClient){

};
getvalue(){
  return this.http.get('https://jsonplaceholder.typicode.com/posts');
}
}