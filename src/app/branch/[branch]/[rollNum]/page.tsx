'use client'
import data from "@/data/phmData.json"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import ResultPDF from "@/components/ResultPDF"

const RollNoPage = () => {
    const { rollNum } = useParams()
    const [roll, setRoll] = useState(rollNum);
    const [singleData, setSingleData] = useState({})

    useEffect(() => {
        const _run = async () => {
            const thatStd = await data["student"].filter(item => item.roll === roll)
            setSingleData(thatStd[0])
        }
        _run()
    }, [rollNum])

    return (
        <ResultPDF html={singleData.html} />
    );
}

export default RollNoPage;