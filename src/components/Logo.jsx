import {Link} from "react-router-dom";


export default function Logo() {
    return <h1 className=" w-[230px] "><Link to="/"><img src={require('./img/logo.png')}/></Link></h1>;
}
