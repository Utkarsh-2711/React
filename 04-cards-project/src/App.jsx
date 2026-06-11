import React from "react";
import Card from "./Components/Card";

const jobOpenings = [
    {
        brandLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSHd3wiN3i0SL_kX9XDU0jXRpSbjNhmxSdeQQP8GAViZcOUkrl_6q598&s=10",
        nameOfCompany: "Google",
        datePosted: "5 days ago",
        post: "Frontend Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$42/hr",
        location: "Mumbai, India",
    },
    {
        brandLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXkuzi3SFwd0msOid0UCH7k6h5C0FdWQqKfy4t04Xdgwii5vM3CUbWXU&s=10",
        nameOfCompany: "Meta",
        datePosted: "2 weeks ago",
        post: "React Developer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$48/hr",
        location: "Bangalore, India",
    },
    {
        brandLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcF1jEXn-n49dlkv03niIcdMnvRYS6KAiqGxOEm6QHg&s=10",
        nameOfCompany: "Amazon",
        datePosted: "1 week ago",
        post: "Software Development Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$45/hr",
        location: "Hyderabad, India",
    },
    {
        brandLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgUZCBcNnjXo2oVjD69yajEfb8BGFXDDfpLIPX9m-Ku3zqwCT3VBqL5b3&s=10",
        nameOfCompany: "Apple",
        datePosted: "10 days ago",
        post: "iOS Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$65/hr",
        location: "Pune, India",
    },
    {
        brandLogo:
            "https://i.pinimg.com/736x/1b/54/ef/1b54efef3720f6ac39647fc420d4a6f9.jpg",
        nameOfCompany: "Netflix",
        datePosted: "3 weeks ago",
        post: "Full Stack Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$72/hr",
        location: "Remote, India",
    },
    {
        brandLogo:
            "https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg",
        nameOfCompany: "Microsoft",
        datePosted: "4 days ago",
        post: "Backend Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$50/hr",
        location: "Noida, India",
    },
    {
        brandLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZuZCBYhpMPFmCBLhyyZL5UgZKy92c6ItAlw1iYL1uA&s=10",
        nameOfCompany: "Adobe",
        datePosted: "6 days ago",
        post: "MERN Stack Developer",
        tag1: "Part Time",
        tag2: "Mid Level",
        pay: "$38/hr",
        location: "Ahmedabad, India",
    },
    {
        brandLogo:
            "https://images.icon-icons.com/2108/PNG/512/airbnb_icon_131000.png",
        nameOfCompany: "Airbnb",
        datePosted: "8 weeks ago",
        post: "Node.js Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$68/hr",
        location: "Remote, India",
    },
    {
        brandLogo:
            "https://images.icon-icons.com/2699/PNG/512/nvidia_logo_icon_169902.png",
        nameOfCompany: "NVIDIA",
        datePosted: "12 days ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$58/hr",
        location: "Bangalore, India",
    },
    {
        brandLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTBl6qcVcaxRvgQMci-A-3XXnccN2m4JiHkODK5O-5aQMYfMT9DF5NlA&s=10",
        nameOfCompany: "Tesla",
        datePosted: "10 weeks ago",
        post: "Full Stack Developer",
        tag1: "Contract",
        tag2: "Senior Level",
        pay: "$70/hr",
        location: "Remote, India",
    },
];

const App = () => {
    const arr = [10, 20, 30];

    return (
        <div className="parent">
            {jobOpenings.map(function (elem, idx) {
                return (
                    <div key={idx}>
                        <Card
                            company={elem.nameOfCompany}
                            posted={elem.datePosted}
                            tag1={elem.tag1}
                            tag2={elem.tag2}
                            pay={elem.pay}
                            logo={elem.brandLogo}
                            post={elem.post}
                            location={elem.location}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default App;
