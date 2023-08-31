import { useEffect, useRef, useState } from "react";

const Conversation = () => {

    const messageInputRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(true);

    const handleChange = (e) => {
        setIsEmpty(e.target.value ? false : true);
    };

    return (
        <div id="conversation" className="flex flex-col justify-between  h-full box-border p-10">
            <div id="conversation-header" className=" h-20 w-full bg-slate-400">

            </div>
            <div>

            </div>
            <div className="w-full h-20 flex items-end z-10">
                <textarea
                    onChange={handleChange}
                    ref={messageInputRef}
                    className="rounded-md h-16 min-h-fit w-full p-3 selection:bg-red-500 bg-slate-800 text-white resize-none box-border"
                    placeholder="Type a message"
                />
                <button className="h-16 w-16 mx-3 bg-slate-800 text-white p-2 rounded-md flex items-center justify-center">
                    <img src={`/images/${isEmpty?'file-upload-icon.svg':'send-icon.svg'}`}/>
                </button>
            </div>
        </div>
    );
}

export default Conversation;