
import Card from "./componets/card"
import User from "./componets/user"

function App() {

  const jobs = [
    {
      id: 1,
      company: "Amazon",
      posted: "5 days ago",
      title: "Senior UI/UX Designer",
      tags: ["Part Time", "Senior Level"],
      rate: "$120/Hr",
      location: "Mumbai, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 2,
      company: "Google",
      posted: "2 days ago",
      title: "Frontend Developer",
      tags: ["Full Time", "Mid Level"],
      rate: "$90/Hr",
      location: "Bangalore, India",
      image: "https://tse1.mm.bing.net/th/id/OIP.WZEsF8Yzchv1bEJgr7AiZAHaHa?r=0&cb=thfc1falcon&w=1920&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 3,
      company: "Microsoft",
      posted: "1 week ago",
      title: "Backend Engineer",
      tags: ["Full Time", "Senior Level"],
      rate: "$110/Hr",
      location: "Hyderabad, India",
      image: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png"
    },
    {
      id: 4,
      company: "Flipkart",
      posted: "3 days ago",
      title: "React Developer",
      tags: ["Internship", "Entry Level"],
      rate: "$20/Hr",
      location: "Delhi, India",
      image: "https://thf.bing.com/th/id/OIP.OQrbMsmN86RrB-hXq7AfSQHaHY?r=0&o=7&cb=thfc1falconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 5,
      company: "TCS",
      posted: "4 days ago",
      title: "Software Engineer",
      tags: ["Full Time", "Junior Level"],
      rate: "$60/Hr",
      location: "Lucknow, India",
      image: "https://tse3.mm.bing.net/th/id/OIP._gg7d02oFUUFzrakuRIT5AHaFj?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 6,
      company: "Infosys",
      posted: "6 days ago",
      title: "Data Analyst",
      tags: ["Part Time", "Mid Level"],
      rate: "$70/Hr",
      location: "Pune, India",
      image: "https://mma.prnewswire.com/media/633365/4364085/Infosys_Logo.jpg"
    },
    {
      id: 7,
      company: "Wipro",
      posted: "1 day ago",
      title: "Cloud Engineer",
      tags: ["Full Time", "Senior Level"],
      rate: "$100/Hr",
      location: "Chennai, India",
      image: "https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg"
    },
    {
      id: 8,
      company: "Adobe",
      posted: "2 weeks ago",
      title: "UI Designer",
      tags: ["Contract", "Mid Level"],
      rate: "$85/Hr",
      location: "Noida, India",
      image: "https://tse1.mm.bing.net/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 9,
      company: "Paytm",
      posted: "3 days ago",
      title: "Mobile App Developer",
      tags: ["Full Time", "Junior Level"],
      rate: "$50/Hr",
      location: "Gurgaon, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 10,
      company: "Zomato",
      posted: "5 days ago",
      title: "Product Designer",
      tags: ["Part Time", "Mid Level"],
      rate: "$75/Hr",
      location: "Jaipur, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 11,
      company: "Swiggy",
      posted: "1 week ago",
      title: "QA Engineer",
      tags: ["Full Time", "Entry Level"],
      rate: "$40/Hr",
      location: "Kolkata, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 12,
      company: "Ola",
      posted: "2 days ago",
      title: "DevOps Engineer",
      tags: ["Full Time", "Senior Level"],
      rate: "$95/Hr",
      location: "Bangalore, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 13,
      company: "Uber",
      posted: "4 days ago",
      title: "System Architect",
      tags: ["Contract", "Senior Level"],
      rate: "$130/Hr",
      location: "Delhi, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 14,
      company: "Netflix",
      posted: "3 days ago",
      title: "Full Stack Developer",
      tags: ["Full Time", "Mid Level"],
      rate: "$105/Hr",
      location: "Mumbai, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 15,
      company: "Spotify",
      posted: "1 day ago",
      title: "Frontend Engineer",
      tags: ["Part Time", "Junior Level"],
      rate: "$55/Hr",
      location: "Goa, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 16,
      company: "Byju's",
      posted: "2 weeks ago",
      title: "Content Developer",
      tags: ["Full Time", "Entry Level"],
      rate: "$35/Hr",
      location: "Lucknow, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 17,
      company: "Unacademy",
      posted: "6 days ago",
      title: "Video Editor",
      tags: ["Contract", "Mid Level"],
      rate: "$65/Hr",
      location: "Delhi, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 18,
      company: "Nykaa",
      posted: "5 days ago",
      title: "Graphic Designer",
      tags: ["Part Time", "Junior Level"],
      rate: "$45/Hr",
      location: "Mumbai, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 19,
      company: "Reliance Jio",
      posted: "1 week ago",
      title: "Network Engineer",
      tags: ["Full Time", "Senior Level"],
      rate: "$115/Hr",
      location: "Hyderabad, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    },
    {
      id: 20,
      company: "HCL",
      posted: "2 days ago",
      title: "Software Tester",
      tags: ["Full Time", "Entry Level"],
      rate: "$50/Hr",
      location: "Chennai, India",
      image: "https://wallpaperaccess.com/full/1383682.png"
    }
  ];
  
  console.log(jobs);


  return (

    <div className="parent">
      {jobs.map((item) => <Card key={item.id} company={item.company} posted={item.posted} title={item.title} tags={item.tags} rate={item.rate} location={item.location} image={item.image} />)}
    </div>

  )
}

export default App
