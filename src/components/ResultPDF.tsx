'use client'

import styles from "@/components/table.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ResultPDF = ({ html }) => {
    const router = useRouter()
    const path = usePathname()

    const handleInputClick = () => {
        window.location.href = '/'
    }

    const handleInputClickBack = () => {
        window.location.href = path.slice(0, path.length - 13)
    }

    useEffect(() => {
        const logoImg = document.querySelectorAll('img')
        const btnHome = document.getElementById('btnHome')
        if (logoImg.length > 0) {
            logoImg[0].src = 'https://csvtu.digivarsity.online/Sambalpur/img/sambalpur-university-logo.png'
            logoImg[1].src = "https://csvtu.digivarsity.online/PortalImages/signature.jpg"
        }
        btnHome?.classList.add('hidden')
    })

    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault();
            window.history.forward(); // This will move the user forward instead of backward
        };

        window.history.pushState(null, null, window.location.pathname); // This ensures that the user stays on the current page
        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, []);

    return (
        <>
            <div className="flex justify-center mt-4 mb-8 gap-4">
                <button className="bg-yellow-400 px-4 py-2" onClick={handleInputClick} >Back to Dashboard</button>
                <button className="bg-orange-400 px-4 py-2" onClick={handleInputClickBack} >return</button>
            </div>
            <div className={`${styles} flex flex-col justify-center items-center`} dangerouslySetInnerHTML={{ __html: html }} />
            <div className="flex justify-center">
                <p className="text-red-600">this print is broken for now</p>
            </div>
        </>
    );
}

export default ResultPDF;