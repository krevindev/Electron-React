import { Link } from "react-router-dom";

const SignInPage = () => {
    return (
        <div id="sign-in-page" className="h-full min-h-screen w-full bg-slate-700 flex items-center justify-center">
            <div id="sign-in-content" className="w-1/3 min-w-max flex justify-center items-center">
                <form className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-3xl font-bold">SIGN IN</h1>
                    <select className="sign-in-input">
                        <option value="philippines">Philippines</option>
                        <option value="wakanda">Wakanda</option>
                    </select>
                    <input className="sign-in-input" type="number" placeholder="Phone Number" />
                    <Link to='/home'>
                        <button className=" bg-yellow-500 w-full min-w-max p-3 m-3 rounded-md font-bold" type="submit">NEXT</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default SignInPage;