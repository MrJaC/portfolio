import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { ProjectDataService } from 'src/app/service/project-data.service';
@Component({
  selector: "app-view-project",
  templateUrl: "./view-project.page.html",
  styleUrls: ["./view-project.page.scss"],
})
export class ViewProjectPage implements OnInit {

  title: String;
  id: any;
  data: any;
  projectData: any;
  serviceData: any;
  url: any;
  blurb: any;
  descTextOne: any;
  descTextTwo: any;

  constructor(private route: ActivatedRoute, public projData: ProjectDataService,) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        this.id = this.data["id"];
        this.title = this.data["title"]
      }
    });

    //Data
    
    
  }

  ngOnInit() {
    this.getProjectDetails();

  }


  getProjectDetails(){
    console.log(this.id);
      let d = this.projData.getProjectdata();
      this.serviceData = d;
      this.projectData = this.serviceData.filter(
        test => test.id === this.id 
      );
      console.log(this.projectData);
      return this.projectData;
  }
  sortDataPackage(data){
    
  }
}
