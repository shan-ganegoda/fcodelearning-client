import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../../entity/employee";
import {Gender} from "../../../entity/gender";
import {Designation} from "../../../entity/designation";
import {Employeeservice} from "../../../service/employeeservice";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UiAssist} from "../../../util/ui/ui.assist";
import {Genderservice} from "../../../service/genderservice";
import {Designationservice} from "../../../service/designationservice";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmComponent} from "../../../util/dialog/confirm/confirm.component";
import {Employeestatus} from "../../../entity/employeestatus";
import {EmployeeStatusService} from "../../../service/employeestatusservice";
import {Regexservice} from "../../../service/regexservice";
import {MessageComponent} from "../../../util/dialog/message/message.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit{

  columns:string[] = ['number','callingname','gender','designation','fullname','modi'];
  headers:string[] = ['Number','Calling Name','Gender','Designation','Full Name','Modification'];
  binders: string[] = ['number','callingname','gender.name','designation.name','fullname','getModi()']

  cscolumns: string[] = ['csnumber','cscallingname','csgender', 'csdesignation' , 'csfullname','csmodi'];
  csprompts: string[] = ['Search by Number','Search by Name','Search by Gender', 'Search by Designation' ,'Search by Full Name','Search by Modi'];

  public csearch!:FormGroup;
  public ssearch!:FormGroup;
  public form!: FormGroup;

  employee!: Employee;

  employees:Array<Employee> = [];
  data!: MatTableDataSource<Employee>;
  imageurl:string= './assets/pending.gif';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  imageempurl:string = 'assets/default.png';

  genders:Array<Gender> = [];
  designations:Array<Designation> = [];
  employeestatuses:Array<Employeestatus> = [];

  regexes: any;

  uiassist:UiAssist;

  constructor(
    private es:Employeeservice,
    private gs:Genderservice,
    private ds:Designationservice,
    private fb:FormBuilder,
    private md:MatDialog,
    private ss:EmployeeStatusService,
    private rs:Regexservice
  ) {


    this.uiassist = new UiAssist(this);



    this.csearch = this.fb.group({
      "csnumber": new FormControl(),
      "cscallingname": new FormControl(),
      "csgender": new FormControl(),
      "csdesignation": new FormControl(),
      "csfullname": new FormControl(),
      "csmodi": new FormControl(),
    });

    this.ssearch = this.fb.group({
      "ssnumber": new FormControl(),
      "ssnic": new FormControl(),
      "ssgender": new FormControl(),
      "ssdesignation": new FormControl(),
      "ssfullname": new FormControl(),
    });

    this.form = this.fb.group({
      "number": new FormControl('',[Validators.required , Validators.pattern("^\\d{4}$")]),
      "fullName": new FormControl('',[Validators.required]),
      "callingName": new FormControl('',[Validators.required]),
      "gender": new FormControl('',[Validators.required]),
      "nic": new FormControl('',[Validators.required]),
      "birthdate": new FormControl('',[Validators.required]),
      "photo": new FormControl('',[Validators.required]),
      "address": new FormControl('',[Validators.required]),
      "mobile": new FormControl('',[Validators.required]),
      "land": new FormControl('',[Validators.required]),
      "designation": new FormControl('',[Validators.required]),
      "assignmentDate": new FormControl('',[Validators.required]),
      "description": new FormControl('',[Validators.required]),
      "employeestatus": new FormControl('',[Validators.required]),
    });
  }



  ngOnInit(){
    this.initialize();
  }

  initialize(){
    this.createView();

    this.gs.getAllList().then((gens: Gender[]) => {
      this.genders = gens;
      console.log("G-"+this.genders);
    });

    this.ds.getAllList().then((dess: Designation[]) => {
      this.designations = dess;
      console.log("D-"+this.designations);
    });

    this.ss.getAllList().then((stes: Gender[]) => {
      this.employeestatuses = stes;
      console.log("S-"+this.employeestatuses);
    });

    this.rs.get('employee').then((regs: []) => {
      this.regexes = regs;
      console.log("R-"+this.regexes['number']['regex']);
      this.createForm();
    });


    this.createSearch();
    this.createForm();
  }

  createView(){
    this.imageurl = './assets/pending.gif';
    this.loadTable("");
  }

  createSearch(){ }
  createForm(){

    this.form.controls['number'].setValidators([Validators.required,Validators.pattern(this.regexes['number']['regex'])]);
    this.form.controls['fullname'].setValidators([Validators.required,Validators.pattern(this.regexes['fullname']['regex'])]);
    this.form.controls['callingname'].setValidators([Validators.required,Validators.pattern(this.regexes['callingname']['regex'])]);
    this.form.controls['gender'].setValidators([Validators.required]);
    this.form.controls['nic'].setValidators([Validators.required,Validators.pattern(this.regexes['nic']['regex'])]);
    this.form.controls['dob'].setValidators([Validators.required]);
    this.form.controls['photo'].setValidators([Validators.required]);
    this.form.controls['address'].setValidators([Validators.required,Validators.pattern(this.regexes['address']['regex'])]);
    this.form.controls['mobile'].setValidators([Validators.required,Validators.pattern(this.regexes['mobile']['regex'])]);
    this.form.controls['land'].setValidators([Validators.required,Validators.pattern(this.regexes['land']['regex'])]);
    this.form.controls['designation'].setValidators([Validators.required]);
    this.form.controls['assignmentdate'].setValidators([Validators.required]);
    this.form.controls['description'].setValidators([Validators.required,Validators.pattern(this.regexes['description']['regex'])]);
    this.form.controls['employeestatus'].setValidators([Validators.required]);

    Object.values(this.form.controls).forEach(control => { control.markAsTouched();});
  }


  loadForm(){}

  loadTable(query:string){

    this.es.getAll(query)
      .then((emps: Employee[]) => {
        this.employees = emps;
        this.imageurl='./assets/fullfilled.png';
      })
      .catch((error) => {
        console.log(error);
        this.imageurl= './assets/rejected.png';
      })
      .finally(()=> {
        this.data = new MatTableDataSource(this.employees);
        this.data.paginator=this.paginator;
      });

  }

  getModi(element: Employee){
    return element.number + '(' + element.callingname + ')';
  }

  filterTable():void{

    const csearchdata = this.csearch.getRawValue();

    this.data.filterPredicate = (employee: Employee , filter:string) =>{

      return(csearchdata.csnumber==null || employee.number.toLowerCase().includes(csearchdata.csnumber)) &&
      (csearchdata.cscallingname==null || employee.callingname.toLowerCase().includes(csearchdata.cscallingname)) &&
      (csearchdata.csgender==null || employee.gender.name.toLowerCase().includes(csearchdata.csgender)) &&
      (csearchdata.csdesignation==null || employee.designation.name.toLowerCase().includes(csearchdata.csdesignation)) &&
      (csearchdata.csfullname==null || employee.fullname.toLowerCase().includes(csearchdata.csfullname)) &&
      (csearchdata.csmodi==null || this.getModi(employee).toLowerCase().includes(csearchdata.csmodi));
    };
    this.data.filter = 'xx';
  }

  btnSearchMC():void{

    const ssearchdata = this.ssearch.getRawValue();

    let number = ssearchdata.ssnumber;
    let fullname = ssearchdata.ssfullname;
    let nic = ssearchdata.ssnic;
    let genderid = ssearchdata.ssgender;
    let designationid = ssearchdata.ssdesignation;

    let query = "";

    if(number!=null && number.trim()!="") query = query + "&number="+number;
    if(fullname!=null && fullname.trim()!="") query = query + "&fullname="+fullname;
    if(nic!=null && nic.trim()!="") query = query + "&nic="+nic;
    if(genderid!=null) query = query + "&genderid="+genderid;
    if(designationid!=null) query = query + "&designationid="+designationid;

    if(query!="") query = query.replace(/^./,"?")

    this.loadTable(query);

  }

  btnSearchClearMC():void{

    const confirm = this.md.open(ConfirmComponent,{
      width:'500px',
      data:{ heading: "Search Clean",message:"Are You Sure To Clear The Search?"}
    });

    confirm.afterClosed().subscribe(async result =>{
      if(result){
        this.ssearch.reset();
        this.loadTable("");
      }
    });
  }

  selectImage(e:any):void{
    if(e.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=> {
        this.imageempurl = event.target.result;
        this.form.controls['photo'].clearValidators();
      }
    }
  }

  clearImage():void{
    this.imageempurl = 'assets/default.png';
    this.form.controls['photo'].setErrors({'required':true});
  }

  add(){
    this.employee = this.form.getRawValue();
    let errors = this.getErrors();
    if(errors !=""){
      const errmsg = this.md.open(MessageComponent,{
        width:'500px',
        data:{heading:"Errors - Employee Add", message: "You Have Following Errors <br/>" + errors}
      });

      errmsg.afterClosed().subscribe(async result => { if(!result){ return; } });
    }else{

    }
    // console.log(this.employee.number);
    // console.log(this.employee.callingname);
    // console.log("Errors : \n"+this.getErrors());
  }

  getErrors(){
    let errors:string = '';

    for(const controlName in this.form.controls){
      const control = this.form.controls[controlName];
      if(control.errors){
        if(this.regexes[controlName]!= undefined){
          errors = errors + "<br/>" + this.regexes[controlName]['message'];
        }else{
          errors = errors + "<br/>Invalid" + controlName;
        }
      }
    }
    return errors;
  }


}
