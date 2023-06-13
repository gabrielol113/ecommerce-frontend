import { useEffect, useState } from "react";
import axios from 'axios';
import { mongooseConnect } from '../../Config/mongoose';


export default function Nav(){
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetchCategories();
    },[])

    async function fetchCategories(req,res){
        //await mongooseConnect();

    }
    return(
        <aside>
            <ul>
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
            </ul>
        </aside>
    );
}