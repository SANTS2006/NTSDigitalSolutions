import login from '../assets/images/solutions/hospital/login.png';
import register from '../assets/images/solutions/hospital/register.png';
import patientmain from '../assets/images/solutions/hospital/patientmain.png';
import registerPatient from '../assets/images/solutions/hospital/registerPatient.png';
import staff from '../assets/images/solutions/hospital/staff.png';
import report from '../assets/images/solutions/hospital/report.png';
import registerreport from '../assets/images/solutions/hospital/registerreport.png';
import registerPrescription from '../assets/images/solutions/hospital/registerPrescription.png';
import prescription from '../assets/images/solutions/hospital/prescription.png';
import dashboard1 from '../assets/images/solutions/hospital/dashboard1.png';


import hostelLogin from '../assets/images/solutions/hostel/hostelLogin.png';
import hostelRegisterAdmin from '../assets/images/solutions/hostel/hostelRegisterAdmin.png';
import hostelDashboard from '../assets/images/solutions/hostel/hostelDashboard.png';
import hostelApproveRegistration from '../assets/images/solutions/hostel/hostelApproveRegistration.png';
import hostelViewRegisteredStudents from '../assets/images/solutions/hostel/hostelViewRegisteredStudents.png';

import rentalLogin from '../assets/images/solutions/rental/rentalLogin.png';
import rentalRegister from '../assets/images/solutions/rental/rentalRegister.png';
import rentalDashboard from '../assets/images/solutions/rental/rentalDashboard.png';
import rentalAddHouse from '../assets/images/solutions/rental/rentalAddHouse.png';
import rentalViewAddedHouses from '../assets/images/solutions/rental/rentalViewAddedHouses.png';

const solutions = [

    {
        id: "hospital-records",

        title:
            "Hospital Records Management System",

        category:
            "Healthcare Solution",

        description:
            "A digital healthcare management system designed to simplify patient records, improve workflow efficiency, and support better healthcare administration.",


        features: [
            "Patient registration",
            "Medical records management",
            "Appointment tracking",
            "Administrative dashboard"
        ],


        technology: {
            frontend: [
                "Java Swing"
            ],
            backend: [
                "Java"
            ],
            database: [
                "mssql"
            ],
            tools: [
                "Git",
                "Github"
            ]
        },

        challenge:
            "Healthcare organizations often rely on manual record-keeping processes, making patient information difficult to manage efficiently.",


        solution:
            "NTS developed a centralized digital records management system that improves organization, accessibility, and workflow efficiency.",

        images: [
           login,
            dashboard1, staff,
           register, registerPatient,
           registerPrescription, prescription,
           patientmain, registerPatient, registerreport
        ]
    },


    {
        id: "hostel-management",

        title:
            "Hostel Registration & Occupancy Management System",

        category:
            "Education Solution",

        description:
            "A platform that simplifies student accommodation management through digital registration, room allocation, and occupancy tracking.",


        features: [
            "Student registration",
            "Room allocation",
            "Occupancy monitoring",
            "Administrative reporting"
        ],


        technology: {
            frontend: [
                "React.js"
            ],
            backend: [
                "Node.js"
            ],
            database: [
                "mssql"
            ],
            tools: [
                "Git",
                "Github"
            ]
        },

        challenge:
            "Healthcare organizations often rely on manual record-keeping processes, making patient information difficult to manage efficiently.",


        solution:
            "NTS developed a centralized digital records management system that improves organization, accessibility, and workflow efficiency.",

        images: [
            hostelLogin,
            hostelDashboard,
            hostelApproveRegistration,
            hostelRegisterAdmin,
            hostelViewRegisteredStudents,
        ]
    },


    {
        id: "house-rental",

        title:
            "House Rental Management System",

        category:
            "Property Management Solution",

        description:
            "A property management platform that helps landlords and tenants manage rental information, properties, and transactions.",


        features: [
            "Property management",
            "Tenant records",
            "Rental tracking",
            "Management dashboard"
        ],


        technology: {
            frontend: [
                "React.js"
            ],
            backend: [
                "Node.js"
            ],
            database: [
                "mssql"
            ], 
            tools: [
                "Git",
                "Github"
            ]
        },


        challenge:
            "Healthcare organizations often rely on manual record-keeping processes, making patient information difficult to manage efficiently.",


        solution:
            "NTS developed a centralized digital records management system that improves organization, accessibility, and workflow efficiency.",

        images: [
            rentalLogin,
            rentalDashboard,
            rentalAddHouse,
            rentalRegister,
            rentalViewAddedHouses
        ]
    }

];


export default solutions;