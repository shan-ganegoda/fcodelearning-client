import {Gender} from "./gender";
import {Designation} from "./designation";
import {Employeestatus} from "./employeestatus";

export class Employee{
    id!: number;
    fullname!:string;
    number!:string;
    callingname!:string;
    photo!:string;
    dob!:string;
    nic!:string;
    address!:string;
    mobile!:string;
    land!:string;
    doassignment!:string;
    description!:string;
    gender!:Gender;
    designation!:Designation;
    employeestatus!: Employeestatus;


  constructor(id: number,fullname:string,number:string,callingname:string,photo:string, dob:string,
              nic:string,address:string,mobile:string,land:string,doassignment:string, description:string,
              gender:Gender,designation:Designation,employeestatus:Employeestatus) {


              this.id = id;
              this.fullname = fullname;
              this.number = number;
              this.callingname = callingname;
              this.photo = photo;
              this.dob = dob;
              this.nic = nic;
              this.address = address;
              this.mobile = mobile;
              this.land = land;
              this.doassignment = doassignment;
              this.description = description;
              this.gender = gender;
              this.designation = designation;
              this.employeestatus = employeestatus;
  }



}
