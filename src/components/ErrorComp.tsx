
const ErrorCompPage = ({ commingSoon = false }) => {
    return (
        <div className="h-screen w-full">
            <div className="min-h-96 flex flex-col justify-center items-center">
                {
                    commingSoon ? (
                        <>
                            <h1 className="font-bold text-8xl text-[#fab005]"><span className="text-[#fd7e14]">Comming Soon</span></h1>
                        </>
                    ): (
                        <>
                        <h1 className = "font-bold text-8xl text-[#fab005]">eat 5 <span className="text-[#fd7e14]">
                    star</span> do nothing</h1>
        </>
    )
}
            </div >
        </div >
    );
}

export default ErrorCompPage;