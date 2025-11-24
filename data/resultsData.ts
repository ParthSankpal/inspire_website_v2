// ============================================================================
// TYPES
// ============================================================================

export type CollegeSelection = {
  year: string;
  entries: {
    photo?:string;
    name: string;
    college: string | null;
  }[];
};

export type ExamPerformance = {
  year: string;
  exam: "JEE-MAIN" | "CET" | "NEET";
  entries: {
    photo?:string;
    name: string;
    percentile?: number;
    score?: number;
    rank?: number;
  }[];
};

// ============================================================================
// IIT ENGINEERING SELECTIONS (YEAR-WISE)
// ============================================================================

export const iitSelections: CollegeSelection[] = [
  {
    year: "2024",
    entries: [
      { name: "YADAV TANISHQ HEMANT", college: "IIT GUWAHATI" },
      { name: "ADALATI SHRISHAIL MAHESH", college: "IIT ROPAR" },
      { photo:"1nQWH45-8IRzgDq7RNmEuxUWTba-BuoRy", name: "JAY MALI", college: "IIT MADRAS" },
      { name: "MANAV LAHOTI", college: "BITS GOA (C.S)" },
    ],
  },
  {
    year: "2023",
    entries: [
      { photo:"1drtGSmmjP3_cDadLhtrWoKS8PAq2prMV", name: "CHAITANYA NITAWE", college: "IIT KANPUR" },
      { name: "ADITYA NIMBALKAR", college: "IIT BOMBAY" },
      { name: "ANURAG WAGH", college: "IIT HAYDRABAD" },
      { name: "PRUTHVIRAJ CHOUGALE", college: "IIT MADRAS" },
      { name: "ATHARVA PAITHANKAR", college: "IIT MADRAS" },
      { name: "SOHAM CHAVAN PATIL", college: "IIT DHANBAD" },
      { name: "ADITYA PATIL", college: "IIT TIRUPATI" },
      { name: "ARCHIT ADNAIK", college: "IIT DHANBAD" },
      { name: "KUNAL THORAWADE", college: "IIT HAYDRABAD" },
      { name: "TANMAYII KOLHE", college: "IISER MOHALI" },
      { name: "PRATHAM LAHOTI", college: "BITS GOA (C.S)" },
    ],
  },
  {
    year: "2022",
    entries: [
      { name: "SHARDUL KURANE", college: "IIT KANPUR" },
      { name: "SAMARTH CHITANIS", college: "IIT DHARWAD" },
      { name: "HARSHADA DESHMUKH", college: "IIT DHARWAD" },
      { name: "MADHUMATI JADHAV", college: "IIT MADRAS" },
      { name: "BHARGAVI JADHAV", college: "IIT MADRAS" },
      { name: "NEERAJ SALUNKHE", college: "IIT DHANBAD" },
      { name: "SANIKA KADAM", college: "IIT KHARAGPUR" },
    ],
  },
  {
    year: "2021",
    entries: [
      { photo:"1ruvq8sgxDfb0Xxuy1gsD2UwyKeW7J9qI", name: "ANGEL JADHNANI", college: "IIT MADRAS" },
      { photo:"1drtGSmmjP3_cDadLhtrWoKS8PAq2prMV", name: "SHRUTI BHALEKAR", college: "IIT BOMBAY" },
      { name: "MANASI KOPADE", college: "IIT DELHI" },
    ],
  },
  {
    year: "2020",
    entries: [
      { name: "PRASAD BHOSALE", college: "IIT DELHI" },
      { name: "AKANKSHA KADAM", college: "IIT BOMBAY" },
      { photo:"1ny7OadiUaDWu0XnQlz-svxDVF00eVDfl", name: "ARNAV PATIL", college: "IIT HYDRABAD" },
      { photo:"1c9tbLrAIFLyfryX60tmmrT8Zhn2NEp88", name: "AARYA PALKHE", college: "IIT ROPAR" },
    ],
  },
  {
    year: "2019",
    entries: [{ photo:"1wNzPG7R8WOawjfGBNLrHCAga0DaAfxZW", name: "HARSH KURANE", college: "IIT KHARAGPUR" }],
  },
  {
    year: "2018",
    entries: [{photo:"1LOVC9wtfrNW0nFNGaN1pb90mcOGXFkGY", name: "SOHAM JOSHI", college: "IIIT BANGALORE" }],
  },
];

// ============================================================================
// MEDICAL COLLEGE SELECTIONS (YEAR-WISE)
// ============================================================================

export const medicalSelections: CollegeSelection[] = [
  {
    year: "2023",
    entries: [
      { photo:"1-5N3YtkF7pRK6SHX1uNP--GMYpvLnk74", name: "SHIVDATTA PATIL", college: "KEM MUMBAI" },
      { name: "SHUBHANKAR SHINDE", college: "GMC SOLAPUR" },
      { name: "TANISH PATIL", college: "LTM SION MUMBAI" },
      { name: "NEERAL SURVE", college: "GMC MUMBAI" },
    ],
  },
  {
    year: "2022",
    entries: [
      { name: "ASHWIN DHAVALE", college: "KEM MUMBAI" },
      { photo:"1ORsfdTq7_g6APb1oh5kpFRkkbIfsE4Bp", name: "AYUSH PATIL", college: "KEM MUMBAI" },
      { name: "KARTIK BHISE", college: "KEM MUMBAI" },
      { name: "ATHARVA KSHIRSAGAR", college: "LTM SION MUMBAI" },
      { name: "SHRUTI SWAMI", college: "VPMC NASHIK" },
      { name: "SWAMINI GHATAFE", college: "MIMER PUNE" },
      { name: "SHRUTI JADHAV", college: "GMC KOLHAPUR" },
    ],
  },
  {
    year: "2021",
    entries: [
      { name: "ASHWIN HEMMADY", college: "NKP SALVE NAGPUR" },
      { name: "GOURI KARANJKAR", college: "GMC MIRAJ" },
      { name: "SHREYA VIRKAR", college: "GMC MIRAJ" },
      { name: "SHREYASI SATPUTE", college: "GMC YAVATMAL" },
      { name: "HARSHATA UPADHYAY", college: "UP UOMS SAIFAI" },
    ],
  },
  {
    year: "2020",
    entries: [
      { photo:"1ZkL0OjJNoyR3GL7_KJmVIKMDIDsoeBUL", name: "PRAJAKT KHOT", college: null },
      { name: "AARYA TENDULKAR", college: "SMC PUNE" },
      { name: "RUTUJA KALBHOR", college: "GMC YAVATMAL" },
      { name: "ANIRUDDHA PAWAR", college: "BABVMC PUNE" },
    ],
  },
];

// ============================================================================
// JEE-MAIN RESULTS (2024, 2023, 2022)
// ============================================================================

export const jeeMainPerformances: ExamPerformance[] = [
  {
    year: "2024",
    exam: "JEE-MAIN",
    entries: [
      { name: "JAY MALI", percentile: 99.5282797 },
      { name: "TANISHQ YADAV", percentile: 99.4451534 },
      { name: "MANAV LAHOTI", percentile: 99.4086778 },
      { name: "YUGANDHAR PATIL", percentile: 93.6080657 },
      { name: "PRADNYA PATIL", percentile: 93.4182531 },
      { name: "REYANSH PARCHANI", percentile: 91.034367 },
    ],
  },

  {
    year: "2023",
    exam: "JEE-MAIN",
    entries: [
      { name: "ADITYA MANOHAR NIMBALKAR", percentile: 99.8687374 },
      { name: "ANURAG ARJUN WAGH", percentile: 99.8281718 },
      { name: "CHAITANYA SHAILENDRA NITAWE", percentile: 99.7559536 },
      { name: "ADITYA KUMAR PATIL", percentile: 99.5418773 },
      { name: "PRASANNA PRAKASH ADNAIK", percentile: 99.325813 },
      { name: "KUNAL VAIBHAV THORAWADE", percentile: 99.2229257 },
      { name: "PRATHAM PRAKASH LAHOTI", percentile: 98.8480486 },
      { name: "PRUTHVIRAJ MILIND CHOUGALE", percentile: 98.8362058 },
      { name: "TANMAYII TUSHAR KOLHE", percentile: 98.6769521 },
      { name: "SUYASH SUNIL INGALAGI", percentile: 98.494648 },
      { photo:"13Oe0fBj0jRcwt69O4LgZRgpa9fpHC39Y", name: "SOHAM JAYAVANT CHAVAN PATIL", percentile: 98.2415323 },
      { name: "ADNAIK ARCHIT UGAM", percentile: 98.1300256 },
      { name: "ARYARAJ DATTATRAYA BHOSALE", percentile: 98.1015782 },
      { name: "VINIT RATNAKAR BAGAL", percentile: 97.902593 },
      { name: "PAITHANKAR ATHARVA PRAKASH", percentile: 97.4165191 },

      { name: "CHOUGULE ATHARV PANDURANG", percentile: 97.3178688 },
      { name: "ATHARV VASANT SONMALE", percentile: 96.9943485 },
      { name: "KAMATH EESHA SUDHIR", percentile: 96.9800119 },
      { name: "SHIVDATTA JAYWANTRAO PATIL", percentile: 96.4800944 },
      { name: "MRUNAL KRISHNAT NIKAM", percentile: 95.8991499 },
      { name: "KARTIK ROHIT MIRASHI", percentile: 95.7090173 },
      { name: "HARSHVARDHAN AJIT JADHAV", percentile: 94.7156724 },
      { name: "SHUBHANKAR SANTOSH SHINDE", percentile: 94.3782035 },

      { name: "AARYA RAJNEESH PATANKAR", percentile: 93.0790063 },
      { name: "NEERAL MAHESH SURVE", percentile: 93.006509 },
      { name: "GAURI SANTOSH CHAVAN", percentile: 92.2128583 },
      { name: "RADHA MAHENDRA GHARGE", percentile: 91.9125518 },
      { name: "PRUTHVIRAJ PRAKASH KALE", percentile: 91.9023418 },
      { name: "ADITI NITIN CHAVAN", percentile: 91.6503906 },
      { name: "ATHRAV DIPAK PHALAKE", percentile: 91.54898 },
      { name: "OM ANANDRAO CHAVAN", percentile: 91.1782623 },
      { name: "VARDHAN SUDHIR PATIL", percentile: 90.4297054 },
    ],
  },

  {
    year: "2022",
    exam: "JEE-MAIN",
    entries: [
      { name: "BHARGAVI SANDIP JADHAV", percentile: 99.4708585 },
      { name: "SAMARJEET MURAR SHINDE", percentile: 98.9651856 },
      { name: "SAMARTH SATISH CHITNIS", percentile: 98.8389513 },
      { name: "ASHWIN ANAND DHAVALE", percentile: 98.7552776 },
      { name: "NEERAJ SUDHAKAR SALUNKE", percentile: 98.523465 },
      { name: "KARTIK KISHOR MOTE", percentile: 98.5044061 },
      { name: "AYUSH UDAYKUMAR PATIL", percentile: 97.6516359 },
      { name: "HARSHADA YASHODEEP DESHMUKH", percentile: 97.3842621 },
      { name: "SANIKA MAHENDRA KADAM", percentile: 97.255407 },
      { name: "PURVA AMIT KAMAT", percentile: 97.1162776 },
      { name: "SRUJAL DIPAK PAWAR", percentile: 96.6359526 },
      { name: "MADHUMITA JADHAV", percentile: 96.482144 },
      { name: "ATHARVA AMIT KSHIRGAGAR", percentile: 96.4769394 },
      { name: "DEVASHISH VIREN BHIRDI", percentile: 96.3139825 },
      { name: "PRAJIN SUDARSHAN PATIL", percentile: 96.1403454 },
      { name: "SHREERAM VIVEK JADHAV", percentile: 96.0647712 },
      { name: "SOJWAL ANAND RAJMANE", percentile: 95.7531561 },
      { name: "SOHAM ITHAPE", percentile: 94.4807869 },
      { name: "VEDANT RAHUL PHALKE", percentile: 93.5183878 },
      { name: "SWAMI SHRUTI SACHIN", percentile: 93.1149681 },
      { name: "DHROOV SAMEER WADDDESAI", percentile: 91.0825551 },
    ],
  },
];

// ============================================================================
// CET RESULTS (MHT-CET 2024, 2023, 2022)
// ============================================================================

export const cetResults: ExamPerformance[] = [
  {
    year: "2024",
    exam: "CET",
    entries: [
      { name: "YADAV TANISHQ HEMANT", percentile: 99.7959778 },
      { name: "MALI JAY", percentile: 99.6757431 },
      { name: "MANAV SUMIT LAHOTI", percentile: 99.5304736 },
      { name: "YUGANDHAR NIRANJAN PATIL", percentile: 98.676508 },
      { name: "PATIL SANCHITA PRASHANT", percentile: 98.0461443 },
      { name: "DHISALE SWARAJ SUNIL", percentile: 97.7080243 },
      { name: "BHOITE ADITYA SANDESH", percentile: 97.1295005 },
      { name: "OM VIJAY KULKARNI", percentile: 95.8571012 },
      { name: "ADALATTI SHRISHAIL MAHESH", percentile: 95.7554907 },
      { name: "KENWADEKAR YASHRAJ AMAR", percentile: 95.6350031 },
      { name: "DESHMUKH ARNAV AMIT", percentile: 93.2403522 },
      { name: "REYANSH SANTOSH PARCHANI", percentile: 91.6557848 },
    ],
  },

  {
    year: "2023",
    exam: "CET",
    entries: [
      { name: "CHOUGALE PRUTHVIRAJ MILIND", percentile: 99.9646379 },
      { name: "CHAITANYA SHAILENDRA NITAWE", percentile: 99.9293009 },
      { name: "SHANBHAG AAYUSH KIRAN (PCB)", percentile: 99.9358316 },
      { name: "WAGH ANURAG ARJUN", percentile: 99.8546226 },
      { name: "NIMBALKAR ADITYA MANOHAR", percentile: 99.8428732 },
      { name: "PRASANNA PRAKASH ADNAIK", percentile: 99.7721111 },
      { name: "ADITYA KUMAR PATIL", percentile: 99.6868126 },
      { name: "KUNAL VAIBHAV THORAWADE", percentile: 99.6583956 },
      { name: "PRATHAM PRAKASH LAHOTI", percentile: 99.606778 },
      { name: "KARTIK ROHIT MIRASHI", percentile: 99.5112047 },
      { name: "ADNAIK ARCHIT UGAM", percentile: 99.4949495 },
      { name: "TARALEKAR ADARSH RAVINDRA", percentile: 99.4300764 },
      { name: "GHARGE RADHA MAHENDRA", percentile: 99.411404 },
      { name: "SOHAM JAYAVANT CHAVAN PATIL", percentile: 99.2929293 },
      { name: "PAITHANKAR ARTHRVA PRAKASH", percentile: 99.2310578 },
      { name: "INGALAGI SUYASH SUNIL", percentile: 99.1916078 },
      { name: "SHINDE SHUBHANKAR SANTOSH (PCB)", percentile: 99.1974534 },
      { name: "TANMAYII TUSHAR KOLHE", percentile: 99.1827433 },
      { name: "CHAVAN ADITI NITIN", percentile: 99.1633936 },
      { name: "SONMALE ATHARV VASANT", percentile: 99.1283202 },
      { name: "KADAM PIYUSH VIJAY", percentile: 98.9587815 },
      { name: "BAGAL VINIT RATNAKAR", percentile: 98.9487467 },
      { name: "BHOSALE ARYARAJ DATTATRAYA", percentile: 98.9338939 },
      { name: "JADHAV HARSHVARDHAN AJIT", percentile: 98.8813394 },
      { name: "PATEL ANJALI PRAFUL", percentile: 98.6494575 },
      { name: "CHOUGULE ATHARV PANDURANG", percentile: 98.5970819 },
      { name: "SWAMI KEDAR SHIVPRASAD (PCB)", percentile: 98.1112681 },
      { name: "DHISALE SATEJ SUNIL (PCB)", percentile: 98.0518637 },
      { name: "CHAVAN GAURI SANTOSH", percentile: 98.0400628 },
      { name: "VARDHAN SUDHIR PATIL", percentile: 96.9510039 },
      { name: "PATIL SANSKRUTI BHAGWAN", percentile: 96.6535742 },
      { name: "ANIRUDHA VISHWAS KAPSE", percentile: 96.5057987 },
      { name: "JADHAV TRIVENI SOHAN", percentile: 96.3249371 },
      { name: "KABURE YASH SHASHIN", percentile: 96.2813957 },
      { name: "GORAL SHUBHANKAR DEEPAK", percentile: 96.0739719 },
      { name: "PATIL SOHAM SHARADCHANDRA", percentile: 95.9738402 },
      { name: "SHRISHAIL MAHESH ADALATTI", percentile: 95.7761974 },
      { name: "SHINDE OMKAR DILIP", percentile: 94.0399594 },
      { name: "NIKAM SAMRUDDHI VINOD", percentile: 93.4050233 },
      { name: "KADAM SIDDHESH SUBHASH", percentile: 93.2909032 },
      { name: "KULKARNI RUSHIKESH RAHUL", percentile: 92.3494201 },
      { name: "BHOSALE SIDDHI VINAYAK", percentile: 91.4590348 },
      { name: "JADHAV VEDANT GANESH (PCB)", percentile: 90.6576042 },
    ],
  },

  {
    year: "2022",
    exam: "CET",
    entries: [
      { name: "CHITNIS SAMARTH SATISH", percentile: 99.7667865 },
      { name: "KAMAT PURVA AMIT", percentile: 99.6405429 },
      { name: "PATIL PRAJIN SUDARSHAN", percentile: 99.4658978 },
      { name: "HARSHADA YASHODEEP DESHMUKH", percentile: 99.3743779 },
      { name: "SHINDE SAMARJEET MURAR", percentile: 99.07337 },
      { name: "DEVASHISH VIREN BHIRDI", percentile: 99.0258505 },
      { name: "BHOSALE ADITYA MANSING", percentile: 98.685144 },
      { name: "WADD DESAI DHROOV SAMEER", percentile: 98.685144 },
      { name: "RAJMANE SOJWAL ANAND", percentile: 98.6255272 },
      { name: "INGAWALE VISHWARAJ SANDEEP", percentile: 98.4979862 },
      { name: "SASTE MRINMAYEE SANJAY", percentile: 98.4202809 },
      { name: "KOCHARI RUDRA VINAY", percentile: 97.2771336 },
      { name: "YADAV ANUSHKA GANESH", percentile: 97.2106063 },
      { name: "BHURKE PARTH CHARUDATT", percentile: 95.766014 },
      { name: "JADHAV JAYESH SHRIDHAR", percentile: 95.5682731 },
      { name: "ASWALE KOUSTUBH SUNIL", percentile: 94.0838243 },
      { name: "RANANAVARE VANSHIKA ABHAYSINH", percentile: 93.7701957 },
      { name: "PATIL TANISHA ABHIJEET", percentile: 93.6527455 },
      { name: "SARGAR SHREYASH BALASAHEB", percentile: 92.553697 },
    ],
  },
];
