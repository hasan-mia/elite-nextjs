import Image from 'next/image';
import room from "../assets/room.png";
const Cards = ({ data }) => {
    return (
        <div className="card bg-white rounded-md w-72 border border-gray-300">
            <div className="card-header pb-2">
                <a href="#" blur-shadow-image="true">
                    <Image className="w-auto rounded-lg" src={room} alt="card image" />
                </a>
            </div>
            <div className="card-body px-4">
                <a href="#">
                    <h5 className="text-lg text-black">Restauran Name</h5>
                </a>
                <p className="my-2 text-gray-700">
                    <i className="far fa-map-marker-alt"></i>
                    <span className="ml-3">USA</span>
                </p>
                <p className="my-2 text-gray-700">
                    <i className="fal fa-eye"></i>
                    <span className="ml-2">25k people visited</span>
                </p>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    // Call an external API endpoint to get posts.
    // fetching data
    const res = await fetch('../public/data/data.json')
    const data = await res.json()
   data.map(item=>console.log(item))

    // receive `datas` as a prop at build time
    return {
        props: {
            data,
        },
    }
}

export default Cards;