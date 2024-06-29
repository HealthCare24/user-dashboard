// src/components/HospitalList.js
import React from 'react';
import './HospitalList.css';

const hospitals = [
    { id: 1, name: 'City Hospital', location: 'Downtown', imageUrl: '/hospital1.png', description: 'Comprehensive medical services' },
    { id: 2, name: 'County General', location: 'Uptown', imageUrl: '/hospital2.png', description: 'Specialized in emergency care' }
    // Add more hospitals here
];

const HospitalList = () => {
    return (
        <div className="hospital-list">
            <h2>Best Hospitals</h2>
            <div className="hospital-slider">
                {hospitals.map(hospital => (
                    <div key={hospital.id} className="hospital">
                        <img src={hospital.imageUrl} alt={hospital.name} className="hospital-image" />
                        <h3>{hospital.name}</h3>
                        <p>{hospital.location}</p>
                        <p>{hospital.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HospitalList;
