import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ResourcesService {
  url: string = "http://15.207.88.26:8000/Resources";
  data: any = [
    {
      _id: "5fdb1465e541ba1b4046778b",
      title: "archive 1",
      description: "This is the first archive",
      link: "link to img",
      type: "archive",
    },
    {
      _id: "5fdb1465e541ba1b4046778c",
      title: "archive 2",
      description: "This is the second archive",
      link: "link to img",
      type: "archive",
    },
    {
      _id: "5fdb1465e541ba1b4046778d",
      title: "archive 3",
      description: "This is the third archive",
      link: "link to img",
      type: "archive",
    },
    {
      _id: "5fdb1465e541ba1b4046778e",
      title: "archive 4",
      description: "This is the fourth archive",
      link: "link to img",
      type: "archive",
    },
    {
      _id: "5fdb1465e541ba1b4046778f",
      title: "archive 5",
      description: "This is the fifth archive",
      link: "link to img",
      type: "archive",
    },
    {
      _id: "5fdb1465e541ba1b40467790",
      title: "Cathlab",
      description: "PLEASE TAKE LINK FOR THUMBNAIL",
      link: "PLEASE TAKE LINK FOR VIDEO",
      type: "educational-video",
    },
    {
      _id: "5fdb1465e541ba1b40467791",
      title: "Laproscopic Appendectomy",
      description: "PLEASE TAKE LINK FOR THUMBNAIL",
      link: "PLEASE TAKE LINK FOR VIDEO",
      type: "educational-video",
    },
    {
      _id: "5fdb1465e541ba1b40467792",
      title: "Ureterocoel",
      description: "PLEASE TAKE LINK FOR THUMBNAIL",
      link: "PLEASE TAKE LINK FOR VIDEO",
      type: "educational-video",
    },
    {
      _id: "5fdb1465e541ba1b40467793",
      title: "Walters Kluwer",
      description: "",
      link: "www.walterskluwer.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b40467794",
      title: "Informatic",
      description: "",
      link: "www.informindia.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b40467795",
      title: "Globe Pub.",
      description: "",
      link: "www.globepub.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b40467796",
      title: "Cambridge Press",
      description: "",
      link: "www.cambridgeindia.org",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b40467797",
      title: "MD Counsult",
      description: "",
      link: "www.MDConsult.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b40467798",
      title: "National Medical Library",
      description: "",
      link: "www.nmlermed.in",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b40467799",
      title: "W.H.O.",
      description: "",
      link: "www.who.int",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b4046779a",
      title: "Springer Journal",
      description: "",
      link: "www.springerlink.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b4046779b",
      title: "Elsevier",
      description: "",
      link: "www.elsevier.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b4046779c",
      title: "Free Medical Journal",
      description: "",
      link: "www.freemedicaljournal.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b4046779d",
      title: "Elsevier Medical Pub",
      description: "",
      link: "www.elsevierth.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b4046779e",
      title: "Globellist of websites",
      description: "",
      link: "www.csen.comlmedicine/",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b4046779f",
      title: "Pub Med Home Med",
      description: "",
      link: "www.ncbi.nlm.nih.gov/pyb",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a0",
      title: "Oxford Journal",
      description: "",
      link: "www.oxfordjournals.org",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a1",
      title: "Wiley Interscience Jr.",
      description: "",
      link: "www3.interscience.wiley.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a2",
      title: "America Ass Medi",
      description: "",
      link: "jama.ama.assn.org",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a3",
      title: "Academic Medicine",
      description: "",
      link: "www.journals.com/academicmedicine",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a4",
      title: "Science Direct",
      description: "",
      link: "www.sciencedirect.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a5",
      title: "Medical information Resources",
      description: "",
      link: "www.patient.co.uk/showdpc/22",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a6",
      title: "Medicine website Resources",
      description: "",
      link: "www.similima.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a7",
      title: "Medicine",
      description: "",
      link: "www.medicinejournal.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a8",
      title: "Lippincott Williams & wilkins",
      description: "",
      link: "www.lww.com",
      type: "journals",
    },
    {
      _id: "5fdb1465e541ba1b404677a9",
      title: "research society 1",
      description: "This is the first research society",
      link: "link to img",
      type: "research society",
    },
    {
      _id: "5fdb1465e541ba1b404677aa",
      title: "research society 2",
      description: "This is the second research society",
      link: "link to img",
      type: "research society",
    },
    {
      _id: "5fdb1465e541ba1b404677ab",
      title: "research society 3",
      description: "This is the third research society",
      link: "link to img",
      type: "research society",
    },
    {
      _id: "5fdb1465e541ba1b404677ac",
      title: "research society 4",
      description: "This is the fourth research society",
      link: "link to img",
      type: "research society",
    },
    {
      _id: "5fdb1465e541ba1b404677ad",
      title: "research society 5",
      description: "This is the fifth research society",
      link: "link to img",
      type: "research society",
    },
    {
      _id: "5fdb1465e541ba1b404677ae",
      title: "Anaesthesia",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677af",
      title: "Blunt Abd Trauma",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b0",
      title: "Burns Overview",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b1",
      title: "Cancer Kidney An Overview MUHS Conference",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b2",
      title: "Case Of Obstructive Jaundice",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b3",
      title: "Fluid and Electrolyte",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b4",
      title: "Head Injury",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b5",
      title: "Head Injury No Images",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b6",
      title: "HIV and Surgeon",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b7",
      title: "Know Your Instruments",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b8",
      title: "Management of Wound",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677b9",
      title: "Management of Wound No Images",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677ba",
      title: "MUHS",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677bb",
      title: "MUHS 2003",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677bc",
      title: "OJS",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677bd",
      title: "ORAL CANCER",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677be",
      title: "ORAL CANCER No Images",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677bf",
      title: "Shape Your Future",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677c0",
      title: "Surgery Update 2008",
      description: "",
      link: "LINK TO THE DUMMY PPTS",
      type: "ppt",
    },
    {
      _id: "5fdb1465e541ba1b404677c1",
      title: "Students' group",
      description: "",
      link: "http://in.groups.yahoo.com/group/jamkarstudents/",
      type: "useful links",
    },
    {
      _id: "5fdb1465e541ba1b404677c2",
      title: "Link to blog",
      description: "",
      link: "http://jamkarstudents.blogspot.com/2004_09_01_archive.html",
      type: "useful links",
    },
  ];

  constructor(private http: HttpClient) {}

  getArchives(): any {
    return this.data.filter((item) => item.type === "archive");
  }

  getJournal(): any {
    return this.data.filter((item) => item.type === "journals");
  }

  getResearchSociety(): any {
    return this.data.filter((item) => item.type === "research society");
  }

  getVideos(): any {
    return this.data.filter((item) => item.type === "educational-video");
  }

  getPPTs(): any {
    return this.data.filter((item) => item.type === "ppt");
  }
}
