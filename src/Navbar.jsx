// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const [, setCurrentImage] = useState("https://via.placeholder.com/100");
    // currentImage
    const [imageIndex, setImageIndex] = useState(0);

    const imageList = [
        "https://via.placeholder.com/100/FF0000",
        "https://via.placeholder.com/100/00FF00",
        "https://via.placeholder.com/100/0000FF",
    ];

    useEffect(() => {
        // Example of fetching notifications from an API
        // Uncomment and replace with actual API call if needed
        // fetchNotifications();
    }, []);

    const filterItems = () => {
        const items = []; // Replace with your items array
        setFilteredItems(items.filter(item => item.toLowerCase().includes(query.toLowerCase())));
    };

    const selectItem = (item) => {
        setQuery(item);
        setFilteredItems([]);
    };

    const fetchNotifications = () => {
        // Example API call to fetch notifications
        fetch("https://example.com/api/notifications")
            .then(response => response.json())
            .then(data => {
                setNotifications(data.notifications);
                setUnreadCount(data.unreadCount);
                setShowNotifications(!showNotifications);
            })
            .catch(error => {
                console.error("Error fetching notifications:", error);
            });
    };

    const changeImage = () => {
        setImageIndex((imageIndex + 1) % imageList.length);
        setCurrentImage(imageList[imageIndex]);
    };

    return (
        <div className="w-full flex justify-between items-center px-20 bg-black text-black py-5">
            <div className="bg-navbg py-6 w-full flex justify-between items-center bg-slate-950 rounded-md">
                <div className="w-full max-w-xs pl-6">
                    <div className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => { setQuery(e.target.value); filterItems(); }}
                            placeholder="Search..."
                            className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-autoC text-black placeholder-slate-500"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-3 top-2.5 h-5 w-5 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {filteredItems.length > 0 && (
                        <ul className="border rounded-lg mt-2 max-h-60 overflow-auto bg-slate-500">
                            {filteredItems.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => selectItem(item)}
                                    className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex items-center space-x-8 pr-6">
                    <button onClick={changeImage}>
                        <img src="/public/Icons-2.png" alt="icon" className="flex justify-center items-center" />
                    </button>

                    <div className="relative flex justify-center items-center">
                        <button onClick={fetchNotifications} className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            { (
                                // unreadCount > 0 &&
                                <>
                                    <span className="absolute top-0 right-0 mt-1 mr-1 block w-2 h-2 bg-yellow-500 rounded-full"></span>
                                    <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full -mt-2 -mr-2">
                                        {unreadCount}
                                    </span>
                                </>
                            )}
                        </button>

                        {showNotifications && (
                            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg overflow-hidden">
                                {notifications.length > 0 ? (
                                    notifications.map((notification, index) => (
                                        <div key={index} className="p-4 border-b last:border-b-0">
                                            {notification.message}
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-center text-gray-500">
                                        No new notifications
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="relative rounded-lg flex justify-center items-center">
                    {/* currentImage */}
                        <img src="/public/Frame 28.png" alt="Image" className="w-11 h-11 object-contain rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
