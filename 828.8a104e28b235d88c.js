"use strict";(self.webpackChunkmy_async=self.webpackChunkmy_async||[]).push([[828],{7828:(U,u,l)=>{l.r(u),l.d(u,{routes:()=>F});var s=l(6814),c=l(6538),t=l(4946);let _=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-page"]],standalone:!0,features:[t.jDz],decls:9,vars:0,consts:[["routerLinkActive","app-st-active"],["routerLink","view"],["routerLink","form"]],template:function(n,r){1&n&&(t.TgZ(0,"nav")(1,"ul")(2,"li",0)(3,"a",1),t._uU(4,"View"),t.qZA()(),t.TgZ(5,"li",0)(6,"a",2),t._uU(7,"Form"),t.qZA()()()(),t._UZ(8,"router-outlet"))},dependencies:[s.ez,c.lC,c.rH,c.Od],styles:["a[_ngcontent-%COMP%]{text-decoration:none;padding:7px 14px;background-color:#636363;color:#fff;text-align:center;border-radius:4px;transition-duration:.2s}a[_ngcontent-%COMP%]:hover{color:#fff;background-color:#000;transition-duration:.2s}li[_ngcontent-%COMP%]{list-style:none;display:inline;padding:0 4px 0 0}"]}),a})();var f=l(5861);const m="profile-data";let g=(()=>{var e;class a{getData(){return(0,f.Z)(function*(){return JSON.parse(localStorage.getItem(m)??"null")})()}setData(n){return(0,f.Z)(function*(){localStorage.setItem(m,JSON.stringify(n))})()}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();var p=l(95),C=l(1993);function h(e,a){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"button",15),t.NdJ("click",function(){const i=t.CHM(o).index,d=t.oxw();return t.KtG(d.moveFriend(i,-1))}),t._uU(2," Up "),t.qZA(),t.TgZ(3,"button",15),t.NdJ("click",function(){const i=t.CHM(o).index,d=t.oxw();return t.KtG(d.moveFriend(i,1))}),t._uU(4," Down "),t.qZA(),t.TgZ(5,"label",16),t._uU(6),t.qZA(),t._UZ(7,"input",17),t.TgZ(8,"button",15),t.NdJ("click",function(){const i=t.CHM(o).index,d=t.oxw();return t.KtG(d.removeFriend(i))}),t._uU(9," X "),t.qZA(),t.BQk()}if(2&e){const o=a.ngForOf,n=a.index;t.xp6(1),t.Q6J("disabled",0===n),t.xp6(2),t.Q6J("disabled",n===o.length-1),t.xp6(2),t.MGl("for","app-inp-friends-",n,""),t.xp6(1),t.Oqu(n+1),t.xp6(1),t.Q6J("formControlName",n),t.xp6(1),t.Q6J("disabled",1===o.length)}}let Z=(()=>{var e;class a{constructor(){this.fb=(0,t.f3M)(p.qu).nonNullable,this.destroyRef=(0,t.f3M)(t.ktI),this.dataChange=new t.vpe}ngOnInit(){this.formGroup=this.fb.group({studentId:[this.data?.studentId??""],firstname:[this.data?.firstname??""],lastname:[this.data?.lastname??""],age:[this.data?.age??0],autobiography:[this.data?.autobiography??""],friends:this.fb.array(this.data?.friends??[""])}),this.formGroup.valueChanges.pipe((0,C.sL)(this.destroyRef)).subscribe(()=>{this.dataChange.emit(this.formGroup.getRawValue())})}addFriend(){this.formGroup.controls.friends.push(this.fb.control(""))}removeFriend(n){this.formGroup.controls.friends.removeAt(n)}moveFriend(n,r){const{friends:i}=this.formGroup.controls,d=n+r,A=i.at(n);i.removeAt(n),i.insert(d,A)}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-form"]],inputs:{data:"data"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.jDz],decls:25,vars:2,consts:[[3,"formGroup"],[1,"app-cmp-data-form"],["for","app-inp-studentId"],["id","app-inp-studentId","type","text","formControlName","studentId"],["for","app-inp-firstname"],["id","app-inp-firstname","type","text","formControlName","firstname"],["for","app-inp-lastname"],["id","app-inp-lastname","type","text","formControlName","lastname"],["for","app-inp-age"],["id","app-inp-age","type","number","step","1","formControlName","age"],["for","app-inp-autobiography"],["id","app-inp-autobiography","formControlName","autobiography","rows","10"],["type","button",3,"click"],["formArrayName","friends"],[4,"ngFor","ngForOf"],["type","button",3,"disabled","click"],[3,"for"],["type","text",3,"formControlName"]],template:function(n,r){1&n&&(t.TgZ(0,"form",0)(1,"div",1)(2,"label",2),t._uU(3,"Student ID"),t.qZA(),t._UZ(4,"input",3),t.TgZ(5,"label",4),t._uU(6,"Firstname"),t.qZA(),t._UZ(7,"input",5),t.TgZ(8,"label",6),t._uU(9,"Lastname"),t.qZA(),t._UZ(10,"input",7),t.TgZ(11,"label",8),t._uU(12,"Age"),t.qZA(),t._UZ(13,"input",9),t.TgZ(14,"label",10),t._uU(15,"Autobiography"),t.qZA(),t.TgZ(16,"textarea",11),t._uU(17,"    "),t.qZA()(),t.TgZ(18,"fieldset")(19,"legend"),t._uU(20," Friends "),t.TgZ(21,"button",12),t.NdJ("click",function(){return r.addFriend()}),t._uU(22,"Add"),t.qZA()(),t.TgZ(23,"div",13),t.YNc(24,h,10,6,"ng-container",14),t.qZA()()()),2&n&&(t.Q6J("formGroup",r.formGroup),t.xp6(24),t.Q6J("ngForOf",r.formGroup.controls.friends.controls))},dependencies:[s.ez,s.sg,p.UX,p._Y,p.Fj,p.wV,p.JJ,p.JL,p.sg,p.u,p.CE],styles:[".app-cmp-friend-form[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto 1fr auto}input[_ngcontent-%COMP%]{border:1px solid black;padding:7px 12px;transition-duration:.1s}input[_ngcontent-%COMP%]:hover{background-color:#000;color:#fff;transition-duration:.1s}textarea[_ngcontent-%COMP%]{border:1px solid black;padding:7px 12px;transition-duration:.1s}textarea[_ngcontent-%COMP%]:hover{background-color:#000;color:#fff;transition-duration:.1s}"]}),a})();function x(e,a){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"app-profile-form",1),t.NdJ("dataChange",function(r){t.CHM(o);const i=t.oxw();return t.KtG(i.save(r))}),t.qZA(),t.BQk()}if(2&e){const o=a.ngIf;t.xp6(1),t.Q6J("data","undefined"===o?void 0:o)}}let P=(()=>{var e;class a{constructor(){this.profileData=(0,t.f3M)(g),this.data$=this.profileData.getData().then(n=>n??"undefined")}save(n){var r=this;return(0,f.Z)(function*(){yield r.profileData.setData(n)})()}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-form-page"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"data","dataChange"]],template:function(n,r){1&n&&(t.YNc(0,x,2,1,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,r.data$))},dependencies:[s.ez,s.O5,s.Ov,Z]}),a})();function v(e,a){if(1&e&&(t.TgZ(0,"dl")(1,"dt"),t._uU(2,"Student ID"),t.qZA(),t.TgZ(3,"dd"),t._uU(4),t.qZA(),t.TgZ(5,"dt"),t._uU(6,"Fullname"),t.qZA(),t.TgZ(7,"dd"),t._uU(8),t.qZA(),t.TgZ(9,"dt"),t._uU(10,"Age"),t.qZA(),t.TgZ(11,"dd"),t._uU(12),t.qZA(),t.TgZ(13,"dt"),t._uU(14,"Autobiography"),t.qZA(),t.TgZ(15,"dd",2),t._uU(16),t.qZA(),t.TgZ(17,"dt"),t._uU(18,"Friends"),t.qZA(),t.TgZ(19,"dd"),t._uU(20),t.qZA()()),2&e){const o=t.oxw();t.xp6(4),t.Oqu(o.data.studentId),t.xp6(4),t.Oqu(o.data.firstname+" "+o.data.lastname),t.xp6(4),t.Oqu(o.data.age),t.xp6(4),t.Oqu(o.data.autobiography),t.xp6(4),t.Oqu(o.data.friends)}}function y(e,a){1&e&&(t.TgZ(0,"div"),t._uU(1,"No Data"),t.qZA())}let T=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-view"]],inputs:{data:"data"},standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noData",""],[1,"app-cl-paragraph"]],template:function(n,r){if(1&n&&(t.YNc(0,v,21,5,"dl",0),t.YNc(1,y,2,0,"ng-template",null,1,t.W1O)),2&n){const i=t.MAs(2);t.Q6J("ngIf",r.data)("ngIfElse",i)}},dependencies:[s.ez,s.O5],styles:["dt[_ngcontent-%COMP%]{font-weight:700}dd[_ngcontent-%COMP%]{border:1px solid black;padding:7px 12px;width:40ch;margin:5px 0 15px}"]}),a})();function b(e,a){if(1&e&&(t.ynx(0),t._UZ(1,"app-profile-view",1),t.BQk()),2&e){const o=a.ngIf;t.xp6(1),t.Q6J("data","undefined"===o?void 0:o)}}const F=[{path:"",component:_,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"view",component:(()=>{var e;class a{constructor(){this.profileData=(0,t.f3M)(g),this.data$=this.profileData.getData().then(n=>n??"undefined")}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-view-page"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"data"]],template:function(n,r){1&n&&(t.YNc(0,b,2,1,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,r.data$))},dependencies:[s.ez,s.O5,s.Ov,T]}),a})()},{path:"form",component:P}]}]}}]);