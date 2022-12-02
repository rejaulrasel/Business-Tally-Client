import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from './Service/Service';

const Services = () => {
    
    const [filter, setFilter] = useState([])
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState('')


    useEffect(() => {
        fetch('http://localhost:8000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setFilter(data)
                console.log(data);
            })
    }, [])


    const handleSubmit = (e) => {

    }

    

    return (
        <>
            <Header></Header>
            <div className="my-4">
                <h1 className="text-center">Choose Your Best One</h1>
                <form className='d-flex  justify-content-center' onSubmit={handleSubmit}>
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" className='w-25 p-2 my-4' placeholder='enter your product name o r category' />
            </form>
                <div className="row container mx-auto">
                {
                    services.filter((val) => {
                        if (search === "") {
                            return val

                        }
                        else if (val.name.toLowerCase().includes(search.toLowerCase()) || 
                        val.category.toLowerCase().includes(search.toLowerCase())
                        ) {
                            return val
                        }
                    }).map((service) => {
                        return <Service key={service._id} service={service} />
                    })
                }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Services;