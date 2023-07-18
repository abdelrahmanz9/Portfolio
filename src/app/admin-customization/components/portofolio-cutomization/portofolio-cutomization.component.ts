import { ProjectsDataService } from './../../../services/projects-data.service';
import { Project } from './../../../interfaces/project';
import { FormGroup, FormControl, FormArray, FormBuilder,  Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio-cutomization',
  templateUrl: './portofolio-cutomization.component.html',
  styleUrls: ['./portofolio-cutomization.component.scss']
})
export class PortofolioCutomizationComponent implements OnInit {

  constructor(private fb:FormBuilder , private _ProjectsDataService:ProjectsDataService) { }
  reactiveForm :FormGroup = <FormGroup>{}
  projectsData:Project[]= []
  editMode:boolean = false
  projectId:string = ""


  createProject(form:Project){
    if(!this.editMode){
      this._ProjectsDataService.postProjectData(form).subscribe((res)=>{
        this.reactiveForm.reset()
        this. fetchProjectData()
       })
    }else{
      this._ProjectsDataService.updateProjectData(this.projectId,this.reactiveForm.value).subscribe((res)=>{
        this.editMode =false
        this.reactiveForm.reset()
        this.fetchProjectData()
      })
    }


  }

  fetchProjectData(){

    this._ProjectsDataService.fetchProjectData().subscribe((res)=>{
     this.projectsData = res
    })
  }

  deleteProjectData(id:string){
    this._ProjectsDataService.deleteProjectData(id).subscribe((res)=>{
      this.fetchProjectData()
    })
  }


  onProjectUpdated(id:string){
    let currentProject = this.projectsData.find((project)=>{
    return  project.id === id
    })

    if( currentProject?.supImages.length !== undefined &&  currentProject?.supImages.length > 3  ){

      for(let i = 3 ; currentProject?.supImages.length > i   ; i++ ){
        (<FormArray> this.reactiveForm.get('supImages')).push(this.fb.control(currentProject?.supImages[i], Validators.required ))

      }

    }
    if( currentProject?.dependences.length !== undefined &&  currentProject?.dependences.length > 4  ){

      for(let i = 4 ; currentProject?.dependences.length > i   ; i++ ){
        (<FormArray> this.reactiveForm.get('dependences')).push(this.fb.control(currentProject?.dependences[i], Validators.required ))

      }

    }
    this.reactiveForm.setValue({

      projectName:currentProject?.projectName,
      thumbnail:currentProject?.thumbnail,
      gethupLink:currentProject?.gethupLink,
      projectLink:currentProject?.projectLink,
      supImages:currentProject?.supImages,
      description:currentProject?.description,
      dependences:currentProject?.dependences,



    })

    this.projectId = id
    this.editMode = true
  }

































  getImage(){
   return this.reactiveForm.controls['supImages'] as FormArray
  }
  getDependences(){
    return this.reactiveForm.controls['dependences'] as FormArray
  }



  newPtn(formName:string){

   (<FormArray> this.reactiveForm.get(formName)).push(this.fb.control(null, Validators.required ))

  }
  deleteInput(index:number,formName:string){
    (<FormArray> this.reactiveForm.get(formName)).removeAt(index)
  }

  ngOnInit(): void {




    this.reactiveForm = this.fb.group({
      projectName:this.fb.control(null , Validators.required ),
      thumbnail:this.fb.control(null, Validators.required ),
      gethupLink:this.fb.control(null, Validators.required ),
      projectLink:this.fb.control(null, Validators.required ),
      description:this.fb.control(null, Validators.required ),
      supImages:this.fb.array([
        this.fb.control(null, Validators.required ),
        this.fb.control(null, Validators.required ),
        this.fb.control(null, Validators.required ),
      ]),
      dependences:this.fb.array([
        this.fb.control(null, Validators.required ),
        this.fb.control(null, Validators.required ),
        this.fb.control(null, Validators.required ),
        this.fb.control(null, Validators.required ),
      ])
    })





    this. fetchProjectData()
  }





}



