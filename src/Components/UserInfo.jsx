import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserInfo = () => {
    const [udata, setdata] = useState([]);

    const fetchuser = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then(res => res.json())
            .then(data => {
                let users = data.results;
                setdata(users);
            })
            .catch(error => console.error("Error fetching data:", error));
    };

    useEffect(() => {
        fetchuser();
    }, []);

    return (
        <div className="row">
            {udata.map((uitem, index) => (
                <div key={index} className="col-md-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={uitem.picture.large} className="card-img-top" alt={`${uitem.name.first} ${uitem.name.last}`} />
                        <div className="card-body">
                            <h5 className="card-title">{uitem.name.first} {uitem.name.last}</h5>
                            <p className="card-text">{uitem.email}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserInfo;
