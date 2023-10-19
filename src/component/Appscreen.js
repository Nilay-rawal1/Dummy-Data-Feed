import Axios from 'axios';
import { useEffect, useState } from 'react';

function Screen() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://dummyjson.com/users').then((res) => {
            setData(res.data.users);
        })
    }, []);

    useEffect(() => {
        document.title = 'Dummy Data';
    }, []);
    
    const mapping = () => {
        return data.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><img src={item.image} alt="profile-pic" style={{ height: "50px", width: "50px", borderRadius: "50%" }} /></td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.domain}</td>
                    <td>{item.ip}</td>
                    <td>{item.university}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <div className='text-light text-center fw-bold' style={{ fontSize: "35px" }}>Dummy data</div>
            <table className="table table-dark table-borderless mt-2 border p-0" style={{ borderRadius: "100px" }}>
                <thead>
                    <tr className='border-bottom p-1 text-center'>
                        <th>Sno</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {mapping()}
                </tbody>
            </table>
        </div>
    )
}

export default Screen;