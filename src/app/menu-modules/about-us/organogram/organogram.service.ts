import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrganogramService {
  private staff = [];
  private deansNum;
  private medSupNum;
  private officeSupNum;
  private adminOffNum;

  constructor() {
    this.staff = [
      {
        Designation: "Dean",
        Name: "Dr. Ajay. S. Chandanwale",
        Address: "D-401,R.K.Pride, New D.P.Road, Kothrud, Pune-411037",
        Contact: {
          Tel: ["020-26102299", "020-6128000"],
          Fax: "02026126868",
          Cell: "9420697474",
          Email: "deanbjmcpune@gmail.com",
        },
      },
      {
        Designation: "Dy.Dean (UG)",
        Name: "Dr. Arun N. Kowale",
        Address:
          "R-4, vijaygad, SBI CO-OP Hsg society shivtrith nagar,Paud road kothrud. Pune-411038",
        Contact: {
          Tel: ["020-26102296", "020-6123872"],
          Fax: "",
          Cell: "9960762233",
          Email: "",
        },
      },
      {
        Designation: "Dy. Dean (PG)",
        Name: "Dr. Samir V. Joshi",
        Address: "Hirai Niwas, 54/6A kothrud, Pune-411038.",
        Contact: {
          Tel: ["020-26102206"],
          Fax: "",
          Cell: "8329418074",
          Email: "",
        },
      },
      {
        Designation: "Vice.Dean (Administration)",
        Name: "Dr. Muralidhar Tambe",
        Address:
          "A/602,Gagan-Galaxy society,bibwewadi-Kondwa road, Pune-411037",
        Contact: {
          Tel: ["020-26102302", "020-29701044"],
          Fax: "",
          Cell: "",
          Email: "",
        },
      },
      {
        Designation: "Medical Superintendent",
        Name: "Dr. S. B. Punpale",
        Address:
          "Flat no.201, B-9 Building Bhujbal Township nr.Eklavya College, Kothrud,Pune.411038",
        Contact: {
          Tel: ["020-26102344"],
          Fax: "",
          Cell: "9422189531",
          Email: "sbpunpale@gmail.com",
        },
      },
      {
        Designation: "Dy. Medical Superintendent",
        Name: "Dr. Manjeet Santre",
        Address: "Rector's Bunglow,BJGMC Boys hostel, Pune-411001",
        Contact: {
          Tel: ["020-26102203", "020-26102461"],
          Fax: "",
          Cell: "9423421455",
          Email: "",
        },
      },
      {
        Designation: "Office Superintendent (SGH)",
        Name: "Mr. Sanjay B. Dahibhate",
        Address: "Flat no-906, Saptagiri Appt. pancard road Pune-411035",
        Contact: {
          Tel: ["020-26102422"],
          Fax: "",
          Cell: "9403532271",
          Email: "",
        },
      },
      {
        Designation: "Office Superintendent (Nursing)",
        Name: "Mr. Sham. S. Teli",
        Address: "Plot no-71-A Sahkar Vrund Society Paud Road pune-4110",
        Contact: {
          Tel: ["020-26102231"],
          Fax: "",
          Cell: "9225501440",
          Email: "",
        },
      },
      {
        Designation: "Office Superintendent (SGH)",
        Name: "Mr. P. M. Adhari",
        Address: "19/321,Ram Society Yerwada, Pune-411006",
        Contact: {
          Tel: ["020-26128000"],
          Fax: "",
          Cell: "",
          Email: "",
        },
      },
      {
        Designation: "Administrative Officer (BJGMC / SGH)",
        Name: "Mr. Ganesh N. Badadare",
        Address:
          "Pollens Residences A-wing, Flat No.402, Kalepadal, Hadapsar-28",
        Contact: {
          Tel: ["020-29700047"],
          Fax: "",
          Cell: "9869676627",
          Email: "",
        },
      },
      {
        Designation: "Administrative officer (BJGMC)",
        Name: "Mr. Suresh.V.Bonawale",
        Address:
          "Flat no Samarth park hou-society mohanwadi, yerwada,pune-411006.",
        Contact: {
          Tel: ["020-26102303", "020-26130976"],
          Fax: "",
          Cell: "9096632184",
          Email: "",
        },
      },
      {
        Designation: "Administrative officer (SGH)",
        Name: "Mr. Goroba.Y. Awate",
        Address:
          "Gokul Nagari 'C' Build Flat no-3,Tulgabhavani nagar pimple gurav pune-411061",
        Contact: {
          Tel: ["020-26102202", "020-26130962"],
          Fax: "",
          Cell: "",
          Email: "",
        },
      },
    ];
    this.deansNum = [0, 1, 2, 3];
    this.medSupNum = [4, 5];
    this.officeSupNum = [6, 7, 8];
    this.adminOffNum = [9, 10, 11];
  }

  getStaff() {
    return this.staff;
  }

  getDeans() {
    let deans = [];
    for (let i of this.deansNum) {
      deans = deans.concat(this.staff[i]);
    }
    console.log(deans);
    return deans;
  }

  getMedicalSuperintendents() {
    let medSup = [];
    for (let i of this.medSupNum) {
      medSup = medSup.concat(this.staff[i]);
    }
    console.log(medSup);
    return medSup;
  }

  getOfficeSuperintendents() {
    let officeSup = [];
    for (let i of this.officeSupNum) {
      officeSup = officeSup.concat(this.staff[i]);
    }
    console.log(officeSup);
    return officeSup;
  }

  getAdminOfficers() {
    let adminOff = [];
    for (let i of this.adminOffNum) {
      adminOff = adminOff.concat(this.staff[i]);
    }
    console.log(adminOff);
    return adminOff;
  }
}
