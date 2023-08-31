import Conversation from "./Conversation";
import InboxDiv from "./InboxDiv";
import ProfileDiv from "./ProfileDiv";



const HomePage = () => {

    return (
        <div className="w-screen min-w-full min-h-screen bg-slate-700 flex items-stretch justify-stretch" id="home-page">

            <div id="home-left" className="bg-slate-800  w-1/2 hidden sm:flex flex-shrink-[5]  items-stretch justify-stretch box-border rounded-r-2xl">

                <ProfileDiv />

                <InboxDiv />
            </div>
            <div id="home-right" className="relative bg-color2 flex-grow flex-shrink-0 bg-gray-800 transform">
                <div className="absolute w-full h-full cover" />
                <Conversation />
            </div>


        </div>
    );
}

export default HomePage;