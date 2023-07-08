import Image from "next/image";

export default function Banner() {
    return (
        <div className="container">
            <Image src={'/banner.jpg'} alt={"Promo"} width={1400} height={640} className="rounded-md my-10 shadow shadow-slate-700"/>
        </div>
    )
}