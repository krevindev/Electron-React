import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileMenuItem = ({ src, name, activeMenuItem, index, setActiveMenuItem }) => {
    return (
        <div className={`profile-menu-item hover:bg-slate-700 ${index == activeMenuItem ? 'bg-slate-600' : ''}`} onClick={() => setActiveMenuItem(index)}>
            <img className="m-1 mr-5" src={src} /> <h2 className="text-white text-sm ">{name}</h2>
        </div>
    )
};

const ProfileMenuItems = ['Contacts', 'Groups', 'Channels', 'Settings'];

function ProfileDiv() {

    const [activeMenuItem, setActiveMenuItem] = useState(0);

    return (
        <div className="hidden lg:flex home-left-part flex-grow-[.4] flex-shrink-[3] flex-col items-center justify-between box-border border-r border-slate-700 w-10 min-w-fit">
            <div id="home-profile-container" className="w-full h-fit flex flex-col items-center box-border">
                <img src="/images/lebron.svg" className="w-20 m-2" alt="Lebron Cheng" />
                <div id="home-profile-name" className="text-white font-bold">Lebron Cheng</div>
            </div>
            <div id="profile-menu" className="w-full box-border p-2">
                {
                    ProfileMenuItems.map((item, index) => (
                        <ProfileMenuItem
                            src={`/images/profile-menu/profile-menu-${index + 1}.svg`}
                            name={item}
                            activeMenuItem={activeMenuItem}
                            index={index}
                            setActiveMenuItem={setActiveMenuItem} />
                    ))
                }
            </div>
            <Link to='/' className="text-white m-3 flex w-full box-border px-5">
                <img src="/images/logout-icon.svg" className="mr-5" /><span>Logout</span>
            </Link>
        </div>
    );
}

export default ProfileDiv;