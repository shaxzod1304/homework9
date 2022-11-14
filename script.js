let cars = [
    {
        id: Math.random(),
        color: "white",
        mark: "lada_zhiguli06",
        engine: 3.0,
        isTurbo: false,
        hasHatch: false,
        price: 1500,
        img: "https://avatars.mds.yandex.net/i?id=f7fa48ba965ef47f7cd70e2beb63c65f-4538204-images-thumbs&n=13"
    },
    {
        id: Math.random(),
        color: "white",
        mark: "mustang",
        engine: 6.0,
        isTurbo: true,
        hasHatch: true,
        price: 1000000,
        img: "https://avatars.mds.yandex.net/i?id=61fce67a170382a6b79d101a298bf1085a71f1dd-4578804-images-thumbs&n=13&exp=1"
    },
    {
        id: Math.random(),
        color: "blue",
        mark: "lamborgine",
        engine: 5.0,
        isTurbo: true,
        hasHatch: true,
        price: 60000,
        img: "https://avatars.mds.yandex.net/i?id=71effc931575ccc6cf2a98ef8a725df1-5644946-images-thumbs&n=13&exp=1"
    },
    {
        id: Math.random(),
        color: "grey",
        mark: "malibu",
        engine: 4.5,
        isTurbo: true,
        hasHatch: true,
        price: 50000,
        img: "https://avatars.mds.yandex.net/i?id=fe4f9f39f25cd9dfbe771c5f809f6794-4184248-images-thumbs&n=13&exp=1"
    },
    {
        id: Math.random(),
        color: 'blue',
        mark: 'lacceti',
        engine: 3.2,
        isTurbo: true,
        hasHatch: true,
        price: 12000,
        img: 'https://avatars.mds.yandex.net/i?id=5fe553aefc5fa669669ae25648c42a67_l-5287716-images-thumbs&n=13'

    },
    {
        id: Math.random(),
        color: 'yellow',
        mark: 'lamborgine urus',
        engine: 8.2,
        isTurbo: true,
        hasHatch: true,
        price: 500000,
        img: 'https://avatars.mds.yandex.net/i?id=ef9fa34842e638d11dc73528278e6577-5236667-images-thumbs&n=13'
    },
    {
        id: Math.random(),
        color: 'Samoa Orange Pearl',
        mark: 'audi q8',
        engine: 3.0,
        isTurbo: true,
        hasHatch: false,
        price: 80000,
        img: 'https://avatars.mds.yandex.net/i?id=6ce31285b0552a2e4f2d46b1e3b33ffe-5876503-images-thumbs&n=13&ref=image_snippet_one'
    },


    {
        id: Math.random(),
        color: 'yellow',
        mark: 'Lamborghini Aventador S',
        engine: 6.5,
        isTurbo: true,
        hasHatch: false,
        price: 418000,
        img: 'https://cdn.carbuzz.com/gallery-images/1600/540000/300/540320.jpg'
    },


    {
        id: Math.random(),
        color: 'blue',
        mark: 'Bugatti Chiron',
        engine: 8.0,
        isTurbo: true,
        hasHatch: false,
        price: 2900000,
        img: 'https://sportishka.com/uploads/posts/2021-12/1638995793_29-sportishka-com-p-bugatti-sport-krasivo-foto-30.jpg'

    },
    {
        id: Math.random(),
        color: 'Black',
        mark: 'Dodge Charger',
        engine: 7.2,
        isTurbo: true,
        hasHatch: true,
        price: 11308000,
        img: 'https://krot.info/uploads/posts/2021-10/1634552389_26-krot-mobi-p-dodzh-chellendzher-dominika-toretto-mashin-31.jpg'
    },


    {
        id: Math.random(),
        color: 'Orange',
        mark: 'Toyota Supra',
        engine: 3.0,
        isTurbo: true,
        hasHatch: true,
        price: 5534000,
        img: 'https://a.d-cd.net/a61efbes-960.jpg'
    },


    {
        id: Math.random(),
        color: 'White',
        mark: 'Mitsubishi Lancer Evolution 8',
        engine: 3.5,
        isTurbo: true,
        hasHatch: false,
        price: 1100000,
        img: 'http://4everstatic.com/immagini/850xX/auto/tuning/mitsubishi-lancer-evolution,-tuning-218895.jpg'
    },


    {
        id: Math.random(),
        color: 'Blue',
        mark: 'Rolls-Royce Boat Tail',
        engine: 6.7,
        isTurbo: true,
        hasHatch: true,
        price: 28000000,
        img: 'https://www.topgear.com/sites/default/files/images/news-article/carousel/2021/05/ad9270e12c5e5f2e2dd7a20813c26030/rolls-royceboattailfront3_4lifestyle.jpg?w=976&h=549'
    },


    {
        id: Math.random(),
        color: 'Yellow',
        mark: 'Hennessey Venom F5',
        engine: 6.6,
        isTurbo: true,
        hasHatch: true,
        price: 3000000,
        img: 'https://assets.newatlas.com/dims4/default/d11d5b9/2147483647/strip/true/crop/1620x1080+1+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fhennesy-v-five-10.jpg'
    },
    {
        id: Math.random(),
        color: "gray",
        mark: "Nissan",
        engine: 2.6,
        isTurbo: true,
        hasHatch: true,
        price: 15000,
        img: 'https://avatars.mds.yandex.net/i?id=8120e4f1f4c1c0217967e40574f01240_l-5257302-images-thumbs&n=13'
    },
    {
        id: Math.random(),
        color: "black",
        mark: "Toyota",
        engine: 3.0,
        isTurbo: true,
        hasHatch: true,
        price: 20000,
        img: "https://avatars.mds.yandex.net/i?id=0f06d0fa8effaa737a61874a4be2fbb9_l-5235867-images-thumbs&n=13"
    },

]


let max = cars.reduce((a, b) => a.engine > b.engine ? a : b)

cars.forEach(item => {
    let percent = item.engine * 100 / max.engine
    document.write(`
       <div class="block" >
            <span>car id: ${item.id}</span> <hr>
            <i>${item.mark}</i> 
            <b style="color: ${item.color};" >${item.color}</b> <br>
            <b>Турбо мотор: ${item.isTurbo === true ? "Да" : "Нет"}</b>  <br>      
            <b>С люком: ${item.hasHatch === true ? "Да" : "Нет"}</b>    
            <div class="eng">
                <div class="fill" style="width: ${percent}%;" >${Math.round(percent)}%</div>
            </div>
            <img src="${item.img}" alt="${item.mark}" />
            <h3>Цена: ${item.price}</h3>        
       </div>
    `)
})

setTimeout(() => {
    let a = prompt('Какую машину ты покупаешь? ')

    cars.filter(item => {
        if (item.id == a) {
            confirm('ты хочешь выбрать ' + item.mark)
            confirm('у него ' + item.color + ' цвет?')
            confirm('у него есть турбо и люк?')
            confirm('у него мощсть двигателя ' + item.engine)
            let b = confirm('ты точно хочешь купить ' + item.mark)
            if (b == true) {
                cars.splice(a, 1)
                document.write(`${cars}`)
            }
        }
    })
}, 5000)        
cars.forEach(item => {
            let percent = item.engine * 100 / max.engine
            document.write(`
               <div class="block" >
                    <span>car id: ${item.id}</span> <hr>
                    <i>${item.mark}</i> 
                    <b style="color: ${item.color};" >${item.color}</b> <br>
                    <b>Турбо мотор: ${item.isTurbo === true ? "Да" : "Нет"}</b>  <br>      
                    <b>С люком: ${item.hasHatch === true ? "Да" : "Нет"}</b>    
                    <div class="eng">
                        <div class="fill" style="width: ${percent}%;" >${Math.round(percent)}%</div>
                    </div>
                    <img src="${item.img}" alt="${item.mark}" />
                    <h3>Цена: ${item.price}</h3>        
               </div>
            `)
        })