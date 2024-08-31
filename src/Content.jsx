// eslint-disable-next-line no-unused-vars
import React, { useState, useMemo } from 'react';

const Content = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const ethereumText = "Ethereum";
    const ethText = "ETH";
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
    ];

    const filteredOptions = useMemo(() => {
        const query = searchQuery.toLowerCase();
        return options.filter(option =>
            option.label.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const selectOption = (option) => {
        // Handle option selection
        setSearchQuery(option.label);
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col px-20 bg-black text-white py-10">
            <div className="flex w-full gap-14">
                {/* first section */}
                <div className="flex flex-col w-8/12">
                    <p className="flex justify-start items-center mb-4 text-xl">Top Auction</p>
                    <div className="h-auto bg-gradient-to-tr from-[#0042FF] to-[#EB001B] flex p-4 rounded-lg">
                        <div className="mr-4">
                            <img src="/public/Mask group.png" alt="image" className="w-full h-auto rounded-lg -translate-x-8 translate-y-8 text-[#7000FF] " />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <p className="text-xl font-semibold">Magic Bullets</p>
                                <img src="/public/Vector.png" alt="love" className="" />
                            </div>

                            <div className="flex justify-start items-center pt-7">
                                <img src="/public/Ellipse 34.png" alt="tof" className="w-10 h-10 rounded-full" />
                                <div className='pl-5'>
                                    <p className="font-medium">Isaac Asante Asare</p>
                                    <span className="text-sm text-gray-400 pt-2">@obrempong77</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-12 text-gray-400">
                                <p>Price per NFT</p>
                                <p className='pr-20'>Starts in</p>
                            </div>
                            <div className="flex justify-between items-center pt-4">
                                <div className="flex items-center">
                                    <img src="/public/Group 5218.png" alt="logo" className="w-5 h-5" />
                                    <p className="font-semibold text-2xl">80 PLAYR</p>
                                </div>
                                <p className="text-2xl">02h 32m 44s</p>
                            </div>
                            <div className="flex gap-6 pt-28 text-base font-semibold">
                                <button className="px-6 py-3 text-black bg-white rounded-lg">View Rewards</button>
                                <button className="px-6 py-3 bg-transparent border-2 rounded-lg">View Rewards</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second section */}
                <div className="w-4/12">
                    <p className="mb-4 text-xl">My Wallet</p>
                    <div className="border border-white">
                        <div className="flex flex-col h-auto bg-black text-white justify-center items-center p-4 rounded-lg mb-8">
                            <p className="text-sm">Your Balance</p>
                            <p><span>ETH</span> 21.533.10</p>
                        </div>
                        <div className="relative px-14 justify-center items-center flex ">
                            <div className="relative flex items-center border w-64 border-gray-300 rounded-lg bg-black text-white">
                                <img src="/public/Group 5218.png" alt="icon" className="w-6 h-6 absolute left-3" />
                                <div className="w-full pl-12 py-2 cursor-pointer flex items-center" onClick={() => setIsOpen(!isOpen)}>
                                    <span className="text-lg font-medium text-gray-300">{ethereumText}</span>
                                    <span className="text-md font-semibold text-blue-500 ml-2">{ethText}</span>
                                    <svg className="w-5 h-5 ml-14 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {isOpen && (
                                <div className="absolute mt-1 w-full bg-black border border-gray-300 rounded-lg shadow-lg z-10">
                                    <div className="max-h-60 overflow-y-auto">
                                        {filteredOptions.map((option) => (
                                            <p key={option.value} onClick={() => selectOption(option)} className="px-4 py-2 cursor-pointer hover:bg-gray-900 text-white">
                                                {option.label}
                                            </p>
                                        ))}
                                        {filteredOptions.length === 0 && (
                                            <p className="px-4 py-2 text-gray-500">No options found</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center gap-20">
                            <div className="flex">
                                <img src="/public/Icon.png" alt="green" className="mx-auto" />
                                <p className="flex justify-center items-center">Earnings</p>
                            </div>
                            <div className="flex">
                                <img src="/public/Icon (1).png" alt="green" className="mx-auto" />
                                <p className="flex justify-center items-center">Spendings</p>
                            </div>
                        </div>

                        <canvas id="myChart" width="400" height="200"></canvas>

                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-9">
                {/* Featured NFTs Section */}
                <div className="flex flex-col w-8/12">
                    <p className="text-xl font-semibold mb-4 mt-7">Featured NFTs</p>
                    <div className="flex flex-row gap-14">
                        {/* NFT Card 1 */}
                        <div className="flex flex-col w-[241px] h-[383px] border border-gray-300 px-6 py-5 rounded-lg">
                            <img src="/public/Rectangle 39884.png" alt="NFT Image" className="w-full h-auto mb-4" />
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-semibold">Ready Players</p>
                                <img src="/public/Vector (1).png" alt="Vector Icon" className="w-4 h-4" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <img src="/public/Ellipse 34 (3).png" alt="User Avatar" className="w-10 h-10 rounded-full" />
                                <p className="text-sm">@obrempong77</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p>Last Bid</p>
                                <p className="font-semibold">1.57 ETH</p>
                            </div>
                            <button className="w-full py-2 bg-gradient-to-tr from-[#0042FF] to-[#EB001B] text-white rounded-lg">Place a bid</button>
                        </div>
                        {/* NFT Card 2 */}
                        <div className="flex flex-col w-[241px] h-[383px] border border-gray-300 px-6 py-5 rounded-lg">
                            <img src="/public/Rectangle 39885.png" alt="NFT Image" className="w-full h-auto mb-4" />
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-semibold">Ready Players</p>
                                <img src="/public/Vector (1).png" alt="Vector Icon" className="w-4 h-4" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <img src="/public/Ellipse 35.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
                                <p className="text-sm">@eli-bigman</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p>Last Bid</p>
                                <p className="font-semibold">1.57 ETH</p>
                            </div>
                            <button className="w-full py-2 bg-gradient-to-tr from-[#0042FF] to-[#EB001B] text-white rounded-lg">Place a bid</button>
                        </div>
                        {/* NFT Card 3 */}
                        <div className="flex flex-col w-[241px] h-[383px] border border-gray-300 px-6 py-5 rounded-lg">
                            <img src="/public/Rectangle 39885 (1).png" alt="NFT Image" className="w-full h-auto mb-4" />
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-semibold">Ready Players</p>
                                <img src="/public/Vector (1).png" alt="Vector Icon" className="w-4 h-4" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <img src="/public/Ellipse 34 (2).png" alt="User Avatar" className="w-10 h-10 rounded-full" />
                                <p className="text-sm">@njoya</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p>Last Bid</p>
                                <p className="font-semibold">1.18 ETH</p>
                            </div>
                            <button className="w-full py-2 bg-gradient-to-tr from-[#0042FF] to-[#EB001B] text-white rounded-lg">Place a bid</button>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions Section */}
                <div className="flex flex-col w-4/12">
                    <p className="text-xl font-semibold mb-4 mt-7">Recent Transactions</p>
                    <div className="flex flex-col gap-6 border px-5 py-2">
                        {/* Content for Recent Transactions */}
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex items-center gap-4">
                                <img src="/public/Frame 44.png" alt="BTC Icon" className="w-10 h-10" />
                                <div className="flex flex-col">
                                    <p>0.15 BTC</p>
                                    <span className="text-gray-500">$16,533.10</span>
                                </div>
                            </div>
                            <p className="text-white justify-center items-center flex">- $60</p>
                        </div>

                        <div className="flex flex-row justify-between w-full border-t p-1">
                            <div className="flex items-center gap-4">
                                <img src="/public/Frame 45.png" alt="BTC Icon" className="w-10 h-10" />
                                <div className="flex flex-col">
                                    <p>0.15 BTC</p>
                                    <span className="text-gray-500">$16,533.10</span>
                                </div>
                            </div>
                            <p className="text-white justify-center items-center flex">- $1260</p>
                        </div>

                        <div className="flex flex-row justify-between w-full border-t p-1">
                            <div className="flex items-center gap-4">
                                <img src="/public/Frame 46.png" alt="BTC Icon" className="w-10 h-10" />
                                <div className="flex flex-col">
                                    <p>0.33 BTC</p>
                                    <span className="text-gray-500">$16,533.10</span>
                                </div>
                            </div>
                            <p className="text-white justify-center items-center flex">- $2360</p>
                        </div>

                        <div className="flex flex-row justify-between w-full border-t p-1">
                            <div className="flex items-center gap-4">
                                <img src="/public/Frame 44.png" alt="BTC Icon" className="w-10 h-10" />
                                <div className="flex flex-col">
                                    <p>0.01 BTC</p>
                                    <span className="text-gray-500">$21.533.10</span>
                                </div>
                            </div>
                            <p className="text-white justify-center items-center flex">- $630</p>
                        </div>

                        <div className="flex flex-row justify-between w-full border-t p-1">
                            <div className="flex items-center gap-4">
                                <img src="/public/Frame 46.png" alt="BTC Icon" className="w-10 h-10" />
                                <div className="flex flex-col">
                                    <p>0.55 BTC</p>
                                    <span className="text-gray-500">$21,533.10</span>
                                </div>
                            </div>
                            <p className="text-white justify-center items-center flex">- $2360</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
