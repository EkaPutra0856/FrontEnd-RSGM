import Image from "next/image"

const Header = ({toggleSidebar}) => {
    const handleClick = () => {
        toggleSidebar()
    }
    return (
        <header className="bg-[#0360d9] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={toggleSidebar}>
                <Image
                    src="/logo.svg"
                    alt="RSGM Soelastri Logo"
                    width={40}
                    height={40}
                    className="rounded-full bg-white p-1"
                />
                <div>
                    <h1 className="font-bold text-lg md:text-xl">RSGM SOELASTRI</h1>
                    <p className="text-xs md:text-sm">Sejahtera - Maju - Islami - Loyal - Empati</p>
                </div>
            </div>
            <div className="bg-white text-[#0360d9] rounded-full px-4 py-2">
                <p className="text-sm font-medium">Hello</p>
                <p className="font-bold">Danang Aprianto</p>
            </div>
        </header>
    )
}

export default Header