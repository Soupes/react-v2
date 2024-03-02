import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export const FullVinyl: React.FC = () => {
    const [data, setData] = useState<{
        imageUrl: string;
        name: string;
        price: number;
    }>();

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getVinyl() {
            try {
                const { data } = await axios.get('https://63bb1a1e32d17a50908714d3.mockapi.io/items/' + id);
                setData(data);
            } catch (error) {
                alert(error)
                navigate("/");
            }
        }
        getVinyl();
    }, []);

    if (!data) {
        return <>'Загрузка...'</>
    }
    return (
        <div className="container">
            <div className="fullVinyl">
                <img src={data.imageUrl} />
                <h2>{data.name} </h2>
                <ul>
                </ul>
                <h4>{data.price}</h4>
            </div>

        </div>
    )
}