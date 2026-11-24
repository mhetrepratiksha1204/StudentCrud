import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IstudentArr } from 'src/app/model/StudentInterface';
import { StudentService } from 'src/app/service/student.service'
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  isEditmode: boolean = false
  editstdId!: string
  @ViewChild('fnameRef') fnameRef !: ElementRef<HTMLInputElement>;
  @ViewChild('lnameRef') lnameRef !: ElementRef<HTMLInputElement>;
  @ViewChild('contact') contact !: ElementRef<HTMLInputElement>;
  @ViewChild('emailRef') emailRef !: ElementRef<HTMLInputElement>;
  @ViewChild('ActiveRef') activeRef !: ElementRef<HTMLInputElement>;

  studentArr: Array<IstudentArr> = [
    {
      fname: 'Jhon',
      lname: 'Doe',
      contact: 965622559,
      email: 'jhondioe@12',
      isActive: true,
      stdId: '12'
    },
    {
      fname: 'Sam',
      lname: 'Doe',
      contact: 7318569236,
      email: 'sam@25.com',
      isActive: false,
      stdId: '123'
    },
    {
      fname: 'azzy',
      lname: 'srk',
      contact: 7328569236,
      email: 'azzy@25.com',
      isActive: true,
      stdId: '124'
    },
    {
      fname: 'marry',
      lname: 'Elizabeth',
      contact: 9265226626,
      email: 'marry@25.com',
      isActive: false,
      stdId: '125'
    }

  ]

  constructor(
    private _uuidService: StudentService,
    private _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }
  trackByStdId(index: number, std: IstudentArr) {
    return std.stdId
  }

  //create
  onAddStd() {
    let newstudent: IstudentArr = {
      fname: this.fnameRef.nativeElement.value,
      lname: this.lnameRef.nativeElement.value,
      contact: +this.contact.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      isActive: this.activeRef.nativeElement.value === "Yes" ? true : false,
      stdId: this._uuidService.getUuid(),

    }
    // console.log(newstudent)

    this.studentArr.unshift(newstudent)
    this.fnameRef.nativeElement.value = ''
    this.lnameRef.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.emailRef.nativeElement.value = ''
    this.activeRef.nativeElement.value = 'Yes'
    this._snackbar.openSnackbar(`The student with the id ${newstudent.stdId} is added succesfully...!`)

  }

  //Delete
  onstdRemove(stdId: string) {
    const getCopnfirmation= confirm(`Are you sure , you want remove the student with id ${{stdId}} `)
    if (getCopnfirmation) {
      let removeIndex = this.studentArr.findIndex(s => s.stdId === stdId)
      this.studentArr.splice(removeIndex, 1)
      this._snackbar.openSnackbar(` the student id ${stdId} is remove succesfully...!`)

    }
  }

  //Edit
  onstdEdit(std:IstudentArr){
    //patch control
    this.isEditmode =true
    this.fnameRef.nativeElement.value= std.fname;
    this.lnameRef.nativeElement.value=std.lname;
    this.contact.nativeElement.value=std.contact.toString();
    this.emailRef.nativeElement.value=std.email;
    this.activeRef.nativeElement.value=std.isActive ? 'Yes' :'no';
    this.editstdId=std.stdId
  }

  //update
  onUpdate(){
    let updatestd:IstudentArr={
      fname:this.fnameRef.nativeElement.value,
      lname:this.lnameRef.nativeElement.value,
      contact:+this.contact.nativeElement.value,
      email:this.emailRef.nativeElement.value,
      isActive:this.activeRef.nativeElement.value == 'Yes' ? true : false,
      stdId:this.editstdId
    }
    let getIndex = this.studentArr.findIndex(s=> s.stdId === this.editstdId)
    this.studentArr[getIndex]=updatestd;
    this.fnameRef.nativeElement.value=''
    this.lnameRef.nativeElement.value=''
    this.contact.nativeElement.value=''
    this.emailRef.nativeElement.value=''
    this.activeRef.nativeElement.value='Yes'
    this._snackbar.openSnackbar(`the student with the id ${this.editstdId}is update successfully..!`)
    this.isEditmode=false

    // console.log(updatestd)
  }


}
