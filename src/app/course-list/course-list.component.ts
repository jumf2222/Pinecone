import { Component, OnInit, ElementRef, ChangeDetectorRef, Input } from "@angular/core";
import { CourseService } from "../course.service";
import { Course, Schedule, ScheduleData, Dictionary, CourseOption, CAMPUS_NAMES } from "../definitions";
import { TimetableService } from "../timetable.service";
import { transition, animate, style, trigger, animateChild } from "@angular/animations";
import { MatDialog } from "@angular/material/dialog";
import { CourseInfoComponent } from "../course-info/course-info.component";
// import { IDatasource, Datasource } from "ngx-ui-scroll";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"],
  animations: [
    trigger("panel", [
      transition(":enter", [
        style({ height: 0, padding: "0px 12px" }),
        animate("100ms ease", style({ height: "auto", padding: "12px" }))
      ]),
      transition(":leave", [
        animate("9s ease", style({ height: 0, padding: "0px 12px" }))
      ])
    ]),
    trigger("total", [
      transition(":leave", [
        animate("0.3s ease", style({ height: 0 }))
      ])
    ])
  ]
})
export class CourseListComponent implements OnInit {
  // openItems = {};
  // activeItem;
  // courses: Course[];

  // datasource = new Datasource({
  //   get: (index, count, success) => {
  //     success(.value.slice(index, index + count));
  //   },
  //   settings: {
  //     itemSize: 50,
  //     minIndex: 0,
  //     startIndex: 0,
  //   }
  // });
  scheduleData: ScheduleData;
  selectedSections: Dictionary<boolean> = {};

  constructor(public timetableService: TimetableService, public courseService: CourseService, public dialog: MatDialog) {
    this.scheduleData = this.timetableService.scheduleSubject.value;
    // this.timetableService.coursesSubject.subscribe(data => {
    //   if (data) {
    //     this.datasource.settings.maxIndex = data.length;
    //     this.datasource.adapter.reset();
    //   }
    // });
  }

  selectSection(sect: string) {
    this.timetableService.selectSection(sect);
  }

  // toggleExpand(item: Course) {
  //   if (item.code === this.activeItem) {
  //     this.openItems[item.code].height = "0";

  //     this.openItems[item.code].timeout = setTimeout(() => {
  //       delete this.openItems[item.code];
  //     }, 1000);
  //   } else {
  //     let closing = this.activeItem;
  //     if (this.openItems[closing]) {
  //       this.openItems[closing].height = "0";
  //       this.openItems[closing].timeout = setTimeout(() => {
  //         delete this.openItems[closing];
  //       }, 1000);
  //     }

  //     if (!this.openItems[item.code]) {
  //       this.openItems[item.code] = { height: "0" }
  //     } else {
  //       clearTimeout(this.openItems[item.code].timeout);
  //     }
  //     this.activeItem = item.code;
  //     this.openItems[item.code].height = "0";
  //     this.openItem(item);
  //   }
  // }

  // openItem(item: Course) {
  //   setTimeout(() => {
  //     let el = document.getElementById("sel" + item.code);
  //     let clone = <HTMLElement>el.cloneNode(true);

  //     clone.style.transition = "none";
  //     clone.style.visibility = "hidden";
  //     clone.style.maxHeight = "9999px";
  //     clone.style.position = "absolute";
  //     el.appendChild(clone);

  //     setTimeout(() => {
  //       this.openItems[item.code].height = clone.offsetHeight.toString();
  //       el.removeChild(clone);
  //     }, 0);

  //     setTimeout(() => {
  //       this.datasource.adapter.check();
  //     }, 750);
  //   }, 0);
  // }

  ngOnInit(): void {
    // getCourses(this.scheduleData?.courses)
    this.timetableService.scheduleSubject.subscribe(async schedule => {
      if (!schedule) { return; }

      // for (const course of Object.keys(schedule.courses)) {

      // }

      this.selectedSections = {};

      // Remove old
      for (const day of Object.keys(schedule.schedule.times)) {
        for (const time of Object.keys(schedule.schedule.times[day])) {
          const sections = schedule.schedule.times[day][time];

          for (let ind = sections.length - 1; ind > -1; ind--) {
            const sectID = sections[ind];
            if (!sectID) { continue; }

            this.selectedSections[sectID] = true;
          }
        }
      }

      console.log("new", schedule);

      this.scheduleData = schedule;
    });
  }

  formatCode(code: string) {
    return code.substring(0, 3) + " " + code.substring(3, code.length - 1) + " " + code.substring(code.length - 1);
  }

  getCode(code: string, index: number) {
    return this.formatCode(code).split(" ")[index];
  }

  trackByFn(index: number, course: CourseOption) {
    return course.courseID;
  }

  displayFn(course: Course): string {
    if (!course) { return ""; }
    let output = "";
    if (course.code) { output += course.code; }
    if (course.code) { output += " - " + CAMPUS_NAMES[course.campus]; }
    return output;
  }

  openCourseInfo(course: Course) {
    this.dialog.open(CourseInfoComponent, {
      data: course
    });
  }

  // scroll(id, event) {
  //   console.log(`scrolling to ${id}`);
  //   // event.stopPropagation();
  //   // let el = document.getElementById(id);
  //   // el.scrollIntoView({ behavior: "smooth" });
  // }
}
