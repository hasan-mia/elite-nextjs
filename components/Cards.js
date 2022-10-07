import Image from 'next/image';
import { useEffect, useState } from 'react';
import room from '../assets/room.png'

// export const getStaticProps = async () => {
//     const res = await fetch("https://raw.githubusercontent.com/hasan-mia/hasan-mia/main/data.json");
//     const data = await res.json();
//     return {
//         props: {
//             data,
//         },
//     };
// };

const Cards = () => {
    const [data, setData] = useState([]);
    const dataLoad = () => {
        const url = 'https://raw.githubusercontent.com/hasan-mia/hasan-mia/main/data.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }
    useEffect(() => {
        dataLoad()
    }, [])
    console.log(data);
    return (
        <>
            {
                data?.slice(0, 3).map(item =>
                    <div key={item.id} className="card bg-white rounded-md w-72 border border-gray-300">
                        <div className="card-header pb-2">
                            <a href="#" blur-shadow-image="true">
                                {/* <Image src={item.img} layout='fill' alt="image" /> */}
                            </a>
                        </div>
                        <div className="card-body px-4">
                            <a href="#">
                                <h5 className="text-lg text-black">{item.title}</h5>
                            </a>
                            <p className="my-2 text-gray-700">
                                <i className="far fa-map-marker-alt"></i>
                                <span className="ml-3">{item.location}</span>
                            </p>
                            <p className="my-2 text-gray-700">
                                <i className="fal fa-eye"></i>
                                <span className="ml-2">{item.view}</span>
                            </p>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default Cards;