'use client'

import ErrorCompPage from "@/components/ErrorComp";
import data from "@/data/phmData.json";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const BranchPage = () => {
    const params = useParams()
    const router = useRouter()
    const path = usePathname()

    const [inputQuery, setInputQuery] = useState('');
    const [filterData, setFilterData] = useState(data["student"])

    const handleNavigation = (id) => {
        router.push(`${params.branch}/${id}`)
    }

    const handleInputChange = (e) => {
        setInputQuery(e.target.value)
    }

    useEffect(() => {
        const filtered = data["student"].filter(item => item.name.toLowerCase().includes(inputQuery.toLowerCase()))
        setFilterData(filtered)
    }, [inputQuery])

    return (
        <>
            <div className="flex justify-center md:justify-start">
                <label htmlFor="searchQuery" className="font-semibold text-md ml-4">Search By Name: </label>
                <input value={inputQuery} onChange={handleInputChange} className="px-2 py-1 rounded-sm border-2 border-black" type="text" id="searchQuery" />
            </div>
            {
                (params.branch === 'PHM') ? (
                    <div className="w-full h-screen flex flex-col justify-start items-center pt-20">
                        <table className="w-full text-left rtl:text-right">
                            <thead className="uppercase">
                                <tr>
                                    <th scope="col" className="px-4 py-2 md:px-6 md:py-3">Name</th>
                                    <th scope="col" className="px-4 py-2 md:px-6 md:py-3">Roll number</th>
                                    <th scope="col" className="px-4 py-2 md:px-6 md:py-3">Result</th>
                                    <th scope="col" className="px-4 py-2 md:px-6 md:py-3">obtmarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterData.map(item => (
                                        <tr className="cursor-pointer" onClick={() => handleNavigation(item.roll)} key={item.roll}>
                                            <td className="px-4 py-2 md:px-6 md:py-4">{item.name}</td>
                                            <td className="px-4 py-2 md:px-6 md:py-4">{item.roll}</td>
                                            <td className="px-4 py-2 md:px-6 md:py-4">{item.Result}</td>
                                            <td className="px-4 py-2 md:px-6 md:py-4">{item.obtmarks}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>) : (
                    <ErrorCompPage commingSoon />
                )
            }
        </>
    );
}

export default BranchPage;