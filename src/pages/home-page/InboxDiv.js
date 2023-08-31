import { useState } from "react";

const InboxMessages = [
    { imgSrc: '/images/lebron.svg', name: 'Lebron', time: 'Tue', previewMsg: 'Chin cheng hanji...', unreadCount: 0 },
    { imgSrc: '/images/inbox/user2.png', name: 'Ednis Rodman', time: 'Wed', previewMsg: 'Hello test message...', unreadCount: 0 },
    { imgSrc: '/images/inbox/user1.jpg', name: 'Tony Stark', time: '2 hrs', previewMsg: 'I am Ironman...', unreadCount: 0 },
]


const InboxItem = ({ msg, index, activeInboxItem, setActiveInboxItem }) => {
    return (
        <div
            className={`inbox-message mx-5 my-1 h-24 max-w-full rounded-lg grid grid-cols-3 grid-rows-1 text-white cursor-pointer ${activeInboxItem == index ? 'bg-slate-700' : ''}`}
            onClick={() => setActiveInboxItem(index)}
        >
            <div className="w-30 flex items-stretch box-border p-3 min-w-fit col-span-2">
                <img src={msg.imgSrc} className="w-16 mr-5 rounded-full" />
                <div className="flex flex-col items-start justify-between min-w-fit box-border p-2">
                    <h6 className="font-bold items-start text-lg">{msg.name}</h6>
                    <p className="text-gray-400">{msg.previewMsg}</p>
                </div>
            </div>
            <div className="flex justify-end box-border p-3 text-gray-400">
                <p>{msg.time}</p>
            </div>
        </div>
    )
};


const InboxDiv = () => {

    const [activeInboxItem, setActiveInboxItem] = useState(null);

    return (
        <div className="home-left-part flex flex-col flex-grow flex-shrink-[1] box-border resize-x select-none">
            <div className="p-3 m-1 flex justify-stretch items-center box-border">
                <img src="/images/inbox/menu-btn.svg" className="m-3 flex lg:hidden" />
                <input type="text" className="w-full min-h-max px-2 py-3 rounded-md bg-slate-700 box-border text-white placeholder:text-[#c9c9c9] placeholder:font-bold" placeholder="Search" />
            </div>
            {
                InboxMessages.map((msg, index) => (
                    <InboxItem
                        msg={msg}
                        index={index}
                        activeInboxItem={activeInboxItem}
                        setActiveInboxItem={setActiveInboxItem}
                    />
                ))
            }
        </div>
    );
}

export default InboxDiv;
