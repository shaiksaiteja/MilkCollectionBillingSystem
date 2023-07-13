import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  public seller(sup):Observable<any>{
    return this.http.post("http://localhost:3000/seller",sup);
 }
 public adminlog(ad):Observable<any>{
     return this.http.post("http://localhost:3000/admin",ad);
 }
 public sellregister(selldata):Observable<any>{
          return this.http.post("http://localhost:3000/sellerregister",selldata);
 }
 public fetchsellerdata(uname):Observable<any>{
       return this.http.get("http://localhost:3000/sellerdata/"+uname);
 }
 public send(admindata,data):Observable<any>{
  return this.http.post("http://localhost:3000/adminprofile/"+data,admindata);
 }
 public details(code):Observable<any>{
  return this.http.get("http://localhost:3000/getcollection"+"/"+code);
}
public paymentdetails(usercode):Observable<any>{
  return this.http.get("http://localhost:3000/getpay"+"/"+usercode);
}

 public delseller(id):Observable<any>{
  return this.http.delete("http://localhost:3000/deluser"+"/"+id);
 }

 public update(newdata,nid):Observable<any>{
  return this.http.put("http://localhost:3000/update"+"/"+nid,newdata);
 }

 public ratefix(ratedata):Observable<any>{
   return this.http.post("http://localhost:3000/ratecharts",ratedata);
 }
 public updated(fid,data):Observable<any>{
  return this.http.put("http://localhost:3000/uprate"+"/"+fid,data);

 }
 public contact(cdata):Observable<any>{
  return this.http.post("http://localhost:3000/contact",cdata);
 }
 public generate(gendata,user):Observable<any>{
  return this.http.post("http://localhost:3000/genbill/"+user,gendata);
 }

public milkinfo(uname):Observable<any>{
   
  return this.http.get("http://localhost:3000/getmilk/"+uname);
}
public enqinfo():Observable<any>{
   return this.http.get("http://localhost:3000/getdetails");
}


public milkcoll(milk):Observable<any>{
  return this.http.post("http://localhost:3000/milkcollect",milk);
}

public dashboard(user):Observable<any>{
  return this.http.get("http://localhost:3000/getvalues/"+user);
}

public payments(pdata,uid):Observable<any>{
  return this.http.post("http://localhost:3000/payment/"+uid,pdata);
}

public fetchpay(bill,user):Observable<any>{
  return this.http.post("http://localhost:3000/getpayments/"+user,bill);
}
public getAdminInfo():Observable<any>{
  return this.http.get("http://localhost:3000/getadmininfo/"+sessionStorage.getItem('uname'));
}
public userpro(data):Observable<any>{
  return this.http.post("http://localhost:3000/getinfo",data);
}
public getuserInfo(data):Observable<any>{
  return this.http.get("http://localhost:3000/getuser/"+data);
}

public getall(k2):Observable<any>{
  return this.http.get("http://localhost:3000/getall/"+k2);
}

public checkUserCode(x):Observable<any>{
  var data={};
  data['uname']=sessionStorage.getItem('uname');
  data['ucode']=x;
  return this.http.get('http://localhost:3000/checkucode',{params:data});
}

}
