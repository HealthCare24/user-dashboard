// src/components/DoctorList.js
import React from 'react';
import './DoctorList.css';

const doctors = [
    { id: 1, name: 'Dr. Alice Smith', specialty: 'Cardiology', imageUrl: '/doctor1.png', description: 'Experienced in cardiovascular diseases' },
    { id: 2, name: 'Dr. Bob Johnson', specialty: 'Neurology', imageUrl: '/doctor2.png', description: 'Specialist in brain and nervous system' },
    { id: 2, name: 'Dr. Bob Johnson', specialty: 'Neurology', imageUrl: '/doctor2.png', description: 'Specialist in brain and nervous system' },
    { id: 2, name: 'Dr. Bob Johnson', specialty: 'Neurology', imageUrl: '/doctor2.png', description: 'Specialist in brain and nervous system' },
    { id: 2, name: 'Dr. Bob Johnson', specialty: 'Neurology', imageUrl: '/doctor2.png', description: 'Specialist in brain and nervous system' }

    // Add more doctors here
];

const DoctorList = () => {
    return (
        <div className="doctor-list">
            <h2>Best Doctors</h2>
            <div className="doctor-slider">
                {doctors.map(doctor => (
                    <div key={doctor.id} className="doctor">
                        <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
                        <h3>{doctor.name}</h3>
                        <p>{doctor.specialty}</p>
                        <p>{doctor.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DoctorList;
