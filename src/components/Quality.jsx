import excellent from "../assets/excellent.png";
import good from "../assets/good.png";
import average from "../assets/average.png";
import poor from "../assets/poor.png";
import severe from "../assets/severe.png";

const quality = [
    {
        id: 1,
        imageLink: excellent, 
        title: "Excellent",
        class: "Class A",
        subtitle: "Crystal clear and pure, ideal for drinking and bathing.",
        color:"#008000"
      },
      {
        id: 2,
        imageLink: good,  
        title: "Good",
        class: "Class B",
        subtitle: "Safe to use, requires minimal treatment.",
        color: "#008000"
      },
      {
        id: 3,
        imageLink: average,  
        title: "Average",
        class: "Class C",
        subtitle: "Acceptable quality, may need moderate treatment.",
        color:"#000000"
      },
      {
        id: 4,
        imageLink: poor,  
        title: "Poor",
        class: "Class D",
        subtitle: "Poor quality, requires treatment before use for drinking or bathing.",
        color:"#FF0000"
      },
      {
        id: 5,
        imageLink: severe,  
        title: "Severe",
        class: "Class E",
        subtitle: "Hazardous quality, unsuitable for use without extensive treatment.",
color: "#850101"
      }
];

export default quality