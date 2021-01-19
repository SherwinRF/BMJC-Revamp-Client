import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { HistoryComponent } from "./history.component";

describe("HistoryComponent", () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create  History Component", () => {
    expect(component).toBeTruthy();
  });
  it('should have heading "Hospital"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".decorated span").textContent).toEqual(
      "Know about us"
    );
  });
  it('should have paragraph for "Sasson Hospital"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll("p")[0].textContent).toEqual(
      " Sassoon General Hospitals is a large state-run hospital in Pune, India with 1296 beds. It is affiliated to the B. J. Medical College and a Nurses training School. Sassoon Hospital caters to 9,426,959 population of Pune District "
    );
  });
  it('should have image for "Sasson Hospital"', () => {
    const compiled = fixture.nativeElement;
    const image = compiled.querySelectorAll(".body img");
    expect(image[0]["src"]).toContain("assets/about-us/history/oldpic.jpg");
  });
  it('should have paragraph for "Sasson Construction"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll("p")[1].textContent).toEqual(
      " The Jewish philanthropist David Sassoon from Mumbai made a generous donation to make the construction of the hospital possible in 1867. The hospital could originally accommodate 144 patients. "
    );
  });
  it('should have image for "Sasson Construction"', () => {
    const compiled = fixture.nativeElement;
    const image = compiled.querySelectorAll(".body img");
    expect(image[1]["src"]).toContain("assets/about-us/history/bjmc4.jpg");
  });
  it('should have paragraph for "Generous Contribution"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll("p")[2].textContent).toEqual(
      " Pune had already been blessed by the generous contribution of Sassoon- a Jewish merchant family in the form of the David Sassoon Hospital built at a cost of Rs. 213,000 serving the poor and needy from 1867, and the Jacob Sassoon Hospital constructed by his nephew in 1905-06 to relieve the congestion on Hospital. "
    );
  });
  it('should have image for "Generous Contribution"', () => {
    const compiled = fixture.nativeElement;
    const image = compiled.querySelectorAll(".body img");
    expect(image[2]["src"]).toContain("assets/about-us/history/bjmc2.jpg");
  });
  it('should have paragraph for "Architectural Style Buildings"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll("p")[3].textContent).toEqual(
      " On this hallowed ground, came up the B. J. Medical college (BJMC) and the Sassoon Hospital (New Sassoon Building) facing each other with a unique architectural style of both buildings having two white pillars bearing elephant heads at the top. The main building of BJMC was inaugurated by Dr. Radha Krishnan in 1952. "
    );
  });
  it('should have image for "Architectural Style Buildiings"', () => {
    const compiled = fixture.nativeElement;
    const image = compiled.querySelectorAll(".body img");
    expect(image[3]["src"]).toContain("assets/about-us/history/bjmc3.jpg");
  });
  it('should have paragraph for "B.J.M.C Special Fund"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll("p")[4].textContent).toEqual(
      " BJMC and alumni celebrated Diamond Jubilee of BJMC in year 2006 which gave impetus to alumni association. Government of Maharashtra gave the special fund for BJMC through which an 11 storied new building with 26000 sq m built up area is presently being constructed. "
    );
  });
  it('should have image for "B.J.M.C Special Fund"', () => {
    const compiled = fixture.nativeElement;
    const image = compiled.querySelectorAll(".body img");
    expect(image[4]["src"]).toContain("assets/about-us/history/bjmc5.jpg");
  });
  it('should have paragraph for "B.J.M.C Foundation"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll("p")[5].textContent).toEqual(
      " In year 1946 on 23rd June, BJMC was founded to replace erstwhile B. J. Medical School, with Shri. B. G. Kher the head of the Bombay Government, laying the foundation stone. This was the fulfilment of the vision of far sighted Byramjee Jeejeebhoy to have institution in Poona for training & providing medical facilities. "
    );
  });
  it('should have image for "B.J.M.C Foundation"', () => {
    const compiled = fixture.nativeElement;
    const image = compiled.querySelectorAll(".body img");
    expect(image[5]["src"]).toContain("assets/about-us/history/bjmc.jpg");
  });
  it('should have heading "BJMC Achievements and Contribution"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".card-header").textContent).toEqual(
      "BJMC Achievements and Contribution"
    );
  });
  it('should have paragraph 1 for "BJMC Achievements and Contribution"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".card-text")[0].textContent).toEqual(
      " BJMC fought the outbreak of 2009 H1N1 (Swine flu) in Maharashtra. Pune was epicentre of the outbreak and BJMC served as tertiary level facility for critical care of swine flu patients under able leadership of Dr. D. B. Kadam, Professor and Head of the Department of Medicine. "
    );
  });
  it('should have paragraph 2 for "BJMC Achievements and Contribution"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".card-text")[1].textContent).toEqual(
      " In February 2010, BJMC and Sassoon General Hospital promptly handled the casualties of German Bakery bomb blast. Thereafter, BJMC developed a comprehensive disaster management plan for the city of Pune. "
    );
  });
  it('should have paragraph 3 for "BJMC Achievements and Contribution"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".card-text")[2].textContent).toEqual(
      " BJMC has given two Vice Chancellors to the Maharashtra University of Health Sciences (MUHS- a State Medical University), i.e. Dr. M. A. Phadke and Dr. Arun V. Jamkar. Both of them have served as Dean of BJMC. Dr. Arun Jamkar is the present VC of MUHS. "
    );
  });
  it('should have paragraph 4 for "BJMC Achievements and Contribution"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".card-text")[3].textContent).toEqual(
      " Dr, Ajay S. Chandanwale took over as Dean in May 2011. NIH USA granted Clinical Trial Unit to BJMC in collaboration with JHU for 2008-2014 completed successfully its tenure with many studies completed and some underway "
    );
  });
  it('should have paragraph 5 for "BJMC Achievements and Contribution"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".card-text")[4].textContent).toEqual(
      " Kitchen of Sassoon Hospital was renovated into the state-of-the-art one with automatic machines and civil make over through generous donation over 1.5 crores by â€˜Shrimant Dagadusheth Halwai Ganapati Trust, "
    );
  });
  it('should have paragraph 6 for "BJMC Achievements and Contribution"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".card-text")[5].textContent).toEqual(
      " Construction of new water tank for SGH having 12 lakh Litres capacity was completed with total expenditure of Rs. 2.35 crores. Complete Medical coverage was provided by SGH team in collaboration with other hospitals for Athletes participated in 30th Asian Athletics Games at Balewadi Stadium "
    );
  });
  it('should have heading for modal "Sassoon History"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".modal-title").textContent).toEqual(
      "Sassoon History"
    );
  });
  it("should have paragraph 1 for modal", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".modal-body p")[0].textContent).toEqual(
      " Sassoon General Hospitals is a large state-run hospital in Pune, India with 1296 beds. It is affiliated to the B. J. Medical College and a Nurses training School. Sassoon Hospital caters to 9,426,959 population of Pune District- a 2nd most populous district in the State of Maharashtra.Pune had already been blessed by the generous contribution of Sassoon- a Jewish merchant family in the form of the David Sassoon Hospital (Old Sassoon Building) built at a cost of Rs. 213,000 serving the poor and needy from 1867, and the Jacob Sassoon Hospital constructed by his nephew in 1905-06 to relieve the congestion on the David Sassoon Hospital. Both were magnificent buildings, architectural marvels and the clock tower of David Sassoon Hospital, a landmark in the city. The campus had already been blessed by the presence of two great personalities - Avtar Meher Baba was born in the old maternity ward in the hospital, and the father of the nation, Mahatma, Gandhi was operated upon for emergency appendectomy in 1924 by a British Surgeon Col. Murdoch with an Indian anaesthetist Dr. Datey in attendance. "
    );
  });
  it("should have paragraph 2 for modal", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".modal-body p")[1].textContent).toEqual(
      " On this hallowed ground, came up the B. J. Medical college (BJMC) and the Sassoon Hospital (New Sassoon Building) facing each other with a unique architectural style of both buildings having two white pillars bearing elephant heads at the top. The main building of BJMC was inaugurated by Dr. Radha Krishnan in 1952. "
    );
  });
  it("should have paragraph 3 for modal", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".modal-body p")[2].textContent).toEqual(
      " The first Principal of the B. J. Medical College, which started with 50 students, was Dr. B. B. Dikshit, a renowned academician and the quiet mastery of Dr. Bhende, discipline of Dr. Balwani have left an indelible imprint on the young impressionable minds of innumerable students, in their formative years, who in turn have imbibed these sterling qualities to give back the best to society. For many years annually 200 students are admitted for MBBS graduation and 143 for postgraduation. At any given time now 1700 students are on the campus with more than 2000 staff including 268 faculties. Presently, courses of MBBS, MD, MS, PhD, Diplomas, MCh (CVTS), MSc, GNM, BSc Nursing, DMLT, PGDMCH, and PGDGM are offered here. Along the journey of learning the art and science, commerce of medicine, strong values were inculcated, attitudes shaped friendships forged minds were moulded and personalities groomed to give rise to renowned 'personalities' who carved a niche for themselves, in the world. While on one hand many have reached dizzying heights of success and excellence in their chosen profession winning international acclaim, on the other hand, we have some for their unforgettable contribution to cinema and theatre. We have among â€˜BJitesâ€™, dramatists trailing a blaze of glory, keen photographers clicking away, nature lover's trekking their way to the wild, litterateurs penning their thoughts in prose and poetry mountaineers climbing new heights and musicians rocking the stage. BJMC even finds a place in the political scenario with doctor politicians and astute administrators. The firm groundwork laid by Dr. Dikshit and his successor Dr. B. M. Desai, in establishing a rich tradition of excellent teaching, notable research and devoted service has been continued and built upon by successive eminent Deans, up to Dr. Ajay S. Chandanwale, in the present day. Their efforts to retain the good old values, while bringing in the new have resulted in our institution attaining a position of pre-eminence, rated among the top ten medical colleges in India. The sincerity, devotion, single minded love for teaching of countless teachers has rubbed off on successive batches of students, who endeavour to emulate them. While some have entered academics, the second generation teachers are passing on the legacy to the current generation of students while others are providing yoman service of relieving suffering of patients to society. BJMC has given various social activists to the society. Those who have reached the pinnacles of glory in their professional organisations have brought laurels and given name and fame to our institution. The next generations of â€˜BJitesâ€™ are closely following in the footsteps of their parents. Above all, Dr. Dikshitâ€™s path breaking research contribution to the role of acetylcholine in sleep and Dr. Bhende's discovery of the Bombay blood group have etched their names for posterity, Sassoon Hospital had its name in the Jablonski's Dictionary of syndromes, for the syndrome discovered and named after it, by Dr. Ganla and Dr. M. J. Narsimhan. After the centenary celebrations of Sassoon Hospital in 1968, the staff society was born, thanks to the efforts of research minded academicians Dr. Deodhar, Dr. Mutalik and others to provide a platform for sharing and exchange of research work at Staff conferences. The staff society was merged with the newly formed Research Society to boost interdepartmental research and provide a forum for young researches to present their work and publish it in the Research Society Journal 'Medical Journal of Western India. Both are running in full stream and have provided a stepping board for young staff members and students to pursue a career in research. The next two decades saw the expansion of departments and extension of Spheres of activity Several speciality clinics were started. The third decade saw the bifurcation of departments Allied disciplines became full-fledged departments. "
    );
  });
  it("should have paragraph 4 for modal", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll(".modal-body p")[3].textContent).toEqual(
      " The last two decades mark the spreading of wings. Collaborative research through funding agencies like the ICMR and DST took off in a big way. Tribal Research Programme was initiated by the Government of Maharashtra. The Maharashtra Institute of Mental Health - an apex training and research institute was set up in 1991. Outreach services in mental health, preventive medicine, human reproduction research, tribal research, through national agencies like ICMR, and international agencies like WHO and UNICEF got underway, with the initiation of large scale research projects the Institutional Ethics Committee was born. Taking services beyond the boundaries of the institution the Pharmacology Department started publishing quarterly Drug Bulletins 'Drugs News and Views' from 1993 and has been conducting CMES for general practitioner. The Microbiology Department started surveillance services for communicable diseases. 1996 marked the glorious Golden Jubilee of our institution, and plans for renovation of the college library got underway. In a few years the Central Library was transformed into a state of the art 'Library Services Department.' Following the Golden Jubilee, a number of new facilities - diagnostic and therapeutic have been setup - the CT scan, Nuclear Medicine Department, Cardiac Catheterisation Lab, Cardiovascular Thoracic Surgery Unit, the Leptospirosis Diagnostic Lab among others. The Infosys Super speciality Building in the campus is catering to super speciality services for patients. In 1998, new era of collaborative international research started in BJMC. Dr. M. A. Phadke, then Dean, collaborated with Dr. Robert C. Bollinger from Johns Hopkins University (JHU), USA. National Institute of Health (NIH) USA funded the jointly made grant application. Dr. Ramesh A. Bhosale after training in JHU started this work with Dr. K. E. Bharucha then Head of Obstetrics and Gynecology Department. Six Week Extended Nevirapine (SWEN) study was conducted with this grant over the period of 2002-2007 for prevention of mother to infant transmission of HIV. This landmark study was published in Lancet (2008) which made impact leading to modification of guidelines by WHO for prevention of mother to infant transmission of HIV in breastfeeding population in resource poor areas. This gave BJMC the capability of international grade research. After this successful demonstration of research capability, NIH USA granted Clinical Trial Unit to BJMC in collaboration with JHU for 2008-2014. BJMC-JHU application in response to RFA of NIH, topped in first five amongst all applications from world over. Now in BJMC multiple study protocols of research networks of ACTG and IMPAACT are being implemented successfully under BJMC CTU lead by Dr. Ajay S. Chandanwale as Principal Investigator. Various other projects are completed by BJMC viz. Vanderbilt University USA-NARI-BJMC collaborative project on Cancer Cervix Screening in HIV under Dr. Ramesh A. Bhosale Professor and Head of Department of Obstetrics and Gynecology, WHO Cardiovascular Disease surveillance project, International Clinical Epidemiology Network project for MDR TB surveillance, IDSP Training & pilot center, NACO Training Center for : MOs, Technicians & Counselors, etc. In year 2005, through National AIDS Control Organization (NACO) HIV treatment center (ART) was started giving treatment free of charge. Presently more than 24000 HIV infected patients are registered in the ART center and about 12000 are on free ART. This center is the second best in India and lead by Nodal Officer Prof. Dr. D. B. Kadam. BJMC is recognised Government TB treatment center having 4000 tuberculosis patients/suspects per year. BJMC and alumni celebrated Diamond Jubilee of BJMC in year 2006 which gave impetus to alumni association. Government of Maharashtra gave the special fund for BJMC through which an 11 storied new building with 26000 sq m built up area is presently being constructed. "
    );
  });
  it("should display the modal when 'Read more' button is clicked", () => {
    letbtn = fixture.debugElement.query(By.css("#readMore")).nativeElement;
    btn.click();
    fixture.detectChanges();
    letmodal1 = fixture.debugElement.query(By.css("#myModal")).nativeElement;
    expect(window.getComputedStyle(modal1).display).toBe("block");
  });
});
