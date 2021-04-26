import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"


const content = {
    "chuck": {
        "url": "https://api.chucknorris.io/jokes/VfAP8OITRyys5VCop4op3A",
        "value": "Chuck Norris whistles, his his war pigs come running after justin beaver!!!"
    },
    "dad": {
        "id": "Lmjqzsr49pb",
        "joke": "What did the Zen Buddist say to the hotdog vendor? Make me one with everything."
    },
    "anime": {
        "anime": "Jinrui wa Suitai Shimashita",
        "character": "Watashi",
        "quote": "It's quite educational, seeing the thought process of someone in charge."
    },
    "tronald": {
        "value": "I rarely agree with President Obama- however he is 100% correct about Crooked Hillary Clinton. Great ad!\nhttps://t.co/aOvVsZfAW3",
        "href": "http://api.tronalddump.io/quote/NFov-wM1TbW51qyKwjke9A"
    },
    "jeopardy": {
        "question": "One form of this element, atomic number 15, spontaneously ignites right around room temperature",
        "answer": "phosphorus",
        "value": 1000
    }
}

const extUrl = "https://3sem.dyrhoi.com/startcode/api/ext"

function FetchTable() {
    const [tableContent, setTableContent] = useState(content)
    Object.entries(tableContent).map((data, idx) => console.log(data + idx + 1))
    return Object.entries(tableContent).map(data => <div className="container"><h3>{upperCase(data[0])} API</h3>
        <table className="table table-dark"><thead><tr>{
            Object.keys(data[1]).map(c => <th scope="col">{upperCase(c)}</th>)

        }
        </tr></thead>
            <tbody><tr scope="row">{
                Object.values(data[1]).map(c => <td>{c}</td>)
            }
            </tr></tbody></table></div>
    )
}

function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1)
}

export default FetchTable;