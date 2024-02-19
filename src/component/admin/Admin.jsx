import { toast } from "react-hot-toast";
import { AiOutlineSearch } from 'react-icons/ai';

const Admin = () => {

    const fakeData = [
        {
            name: "John Doe",
            email: "john@example.com",
            password: "johnpassword123"
        },
        {
            name: "Jane Doe",
            email: "jane@example.com",
            password: "janepassword456"
        },
        {
            name: "Alice Smith",
            email: "alice@example.com",
            password: "alicepassword789"
        },
        {
            name: "Bob Johnson",
            email: "bob@example.com",
            password: "bobpassword321"
        },
        {
            name: "Eve Wilson",
            email: "eve@example.com",
            password: "evepassword654"
        }
    ];

    return (
        <div className='my-12 bg-[#000000] text-white'>
            {/* <HomeImage /> */}
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold uppercase">
                            All Information
                        </h1>
                    </div>
                    <div className="shadow-2xl md:mx-auto p-4 md:p-16">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                            <table className="w-full max-w-[60rem] md:mx-auto lg:min-w-[768px] text-sm text-left gap-2 bg-[#7B71B0]">
                                <thead className="text-xs uppercase ">
                                    <tr>
                                        <th scope="col" className="p-6">
                                            No
                                        </th>
                                        <th scope="col" className="p-6">
                                            Name
                                        </th>
                                        <th scope="col" className="p-6">
                                            Email
                                        </th>
                                        <th scope="col" className="p-6">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        // [...Array(6)?.keys()].map((tableRow, index) => (
                                        fakeData.map((tableRow, index) => (
                                            <tr
                                                key={index}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {tableRow.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span>{tableRow.email}</span>
                                                    <span>2021</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button className="bg-[#000000] text-white rounded-lg px-2 py-1 cursor-no-drop">Remark</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Admin;