import { Bar } from "vue-chartjs";
import Data from "../assets/data.json";

export default {
  extends: Bar,
  data() {
    return {
      individual: Data
    };
  },
  created() {
    this.counterOn = [0, 0, 0, 0];
    this.counterQc = [0, 0, 0, 0];
    this.counterNs = [0, 0, 0, 0];
    this.counterNb = [0, 0, 0, 0];
    this.counterMb = [0, 0, 0, 0];
    this.counterBc = [0, 0, 0, 0];
    this.counterPe = [0, 0, 0, 0];
    this.counterSk = [0, 0, 0, 0];
    this.counterAb = [0, 0, 0, 0];
    this.counterNl = [0, 0, 0, 0];
    this.counterNt = [0, 0, 0, 0];
    this.counterYk = [0, 0, 0, 0];
    this.counterNu = [0, 0, 0, 0];
    this.regexG = /(\W|^)[\w.+\-]*@gmail(\W|$)/gi;
    this.regexY = /(\W|^)[\w.+\-]*@yahoo(\W|$)/gi;
    this.regexA = /(\W|^)[\w.+\-]*@AOL(\W|$)/gi;
  },
  computed: {
    domainCountON: function() {
      this.individual.forEach(person => {
        if (person.province == "ON") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterOn[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterOn[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterOn[2] += 1;
            } else {
              this.counterOn[3] += 1;
            }
          }
        }
      });
      return this.counterOn;
    },
    domainCountQC: function() {
      this.individual.forEach(person => {
        if (person.province == "QC") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterQc[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterQc[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterQc[2] += 1;
            } else {
              this.counterQc[3] += 1;
            }
          }
        }
      });
      return this.counterQc;
    },
    domainCountNS: function() {
      this.individual.forEach(person => {
        if (person.province == "NS") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterNs[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterNs[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterNs[2] += 1;
            } else {
              this.counterNs[3] += 1;
            }
          }
        }
      });
      return this.counterNs;
    },
    domainCountNB: function() {
      this.individual.forEach(person => {
        if (person.province == "NB") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterNb[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterNb[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterNb[2] += 1;
            } else {
              this.counterNb[3] += 1;
            }
          }
        }
      });
      return this.counterNb;
    },
    domainCountMB: function() {
      this.individual.forEach(person => {
        if (person.province == "MB") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterMb[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterMb[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterMb[2] += 1;
            } else {
              this.counterMb[3] += 1;
            }
          }
        }
      });
      return this.counterMb;
    },
    domainCountBC: function() {
      this.individual.forEach(person => {
        if (person.province == "BC") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterBc[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterBc[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterBc[2] += 1;
            } else {
              this.counterBc[3] += 1;
            }
          }
        }
      });
      return this.counterBc;
    },
    domainCountPE: function() {
      this.individual.forEach(person => {
        if (person.province == "PE") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterPe[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterPe[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterPe[2] += 1;
            } else {
              this.counterPe[3] += 1;
            }
          }
        }
      });
      return this.counterPe;
    },
    domainCountSK: function() {
      this.individual.forEach(person => {
        if (person.province == "SK") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterSk[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterSk[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterSk[2] += 1;
            } else {
              this.counterSk[3] += 1;
            }
          }
        }
      });
      return this.counterSk;
    },
    domainCountAB: function() {
      this.individual.forEach(person => {
        if (person.province == "AB") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterAb[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterAb[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterAb[2] += 1;
            } else {
              this.counterAb[3] += 1;
            }
          }
        }
      });
      return this.counterAb;
    },
    domainCountNL: function() {
      this.individual.forEach(person => {
        if (person.province == "NL") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterNl[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterNl[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterNl[2] += 1;
            } else {
              this.counterNl[3] += 1;
            }
          }
        }
      });
      return this.counterNl;
    },
    domainCountNT: function() {
      this.individual.forEach(person => {
        if (person.province == "NT") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterNt[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterNt[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterNt[2] += 1;
            } else {
              this.counterNt[3] += 1;
            }
          }
        }
      });
      return this.counterNt;
    },
    domainCountYK: function() {
      this.individual.forEach(person => {
        if (person.province == "YK") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterYk[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterYk[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterYk[2] += 1;
            } else {
              this.counterYk[3] += 1;
            }
          }
        }
      });
      return this.counterYk;
    },
    domainCountNU: function() {
      this.individual.forEach(person => {
        if (person.province == "NU") {
          for (let email in person) {
            if (this.regexG.test(person.email)) {
              this.counterNu[0] += 1;
            }
            if (this.regexY.test(person.email)) {
              this.counterNu[1] += 1;
            }
            if (this.regexA.test(person.email)) {
              this.counterNu[2] += 1;
            } else {
              this.counterNu[3] += 1;
            }
          }
        }
      });
      return this.counterNu;
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: ["Gmail", "Yahoo", "AOL", "Other"],
        datasets: [
          {
            label: "ON - Ontario",
            backgroundColor: "#FC2525",
            data: this.domainCountON
          },
          {
            label: "QC - Quebec",
            backgroundColor: "#bf2bd9",
            data: this.domainCountQC
          },
          {
            label: "NS - Nova Scotia",
            backgroundColor: "#4c3ad9",
            data: this.domainCountNS
          },
          {
            label: "NB - New Brunswick",
            backgroundColor: "#2ad2db",
            data: this.domainCountNB
          },
          {
            label: "MB - Manitoba",
            backgroundColor: "#2ade3f",
            data: this.domainCountMB
          },
          {
            label: "BC - British Columbia",
            backgroundColor: "#dbe04a",
            data: this.domainCountBC
          },
          {
            label: "PE - Prince Edward Island",
            backgroundColor: "#e39332",
            data: this.domainCountPE
          },
          {
            label: "SK - Saskatchewan",
            backgroundColor: "#e68c87",
            data: this.domainCountSK
          },
          {
            label: "AB - Alberta",
            backgroundColor: "#6e2029",
            data: this.domainCountAB
          },
          {
            label: "NL - Newfoundland & Labrador",
            backgroundColor: "#524270",
            data: this.domainCountNL
          },
          {
            label: "NT - Northwest Territories",
            backgroundColor: "#1b6d73",
            data: this.domainCountNT
          },
          {
            label: "YK - Yukon",
            backgroundColor: "#697548",
            data: this.domainCountYK
          },
          {
            label: "NU - Nunavut",
            backgroundColor: "#393345",
            data: this.domainCountNU
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
