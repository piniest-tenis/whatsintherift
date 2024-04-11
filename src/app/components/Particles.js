'use client'

export default function Particles() {
    let arrayReturn = Array.from(Array(100).keys());
    arrayReturn.forEach((i, idx) => {
        arrayReturn[idx] = <div key={idx} className="circle-container">
            <div className="circle"></div>
        </div>
    })
    return arrayReturn;
}