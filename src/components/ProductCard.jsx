import { Link } from "react-router-dom"

function ProductCard({id, name, image, prices}) {

    const allPrices = Object.values(prices).map((price) => {
        return Object.values(price)
    }).flat()

    const cheapestPrice = Math.min(...allPrices)

    return (
        <div className="w-72 rounded-lg border border-yellow-600 bg-zinc-950 p-4 text-center text-white
                transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/20">
            <div>
                <img 
                    className="w-full h-40 object-cover rounded-md" src={image} alt={name} 
                />
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">
                    {name}
                </h2>
                <p className="text-yellow-500 mt-2">
                    Mulai dari Rp.{cheapestPrice}
                </p>
                <Link 
                    to={`/product/${id}`}
                    className="inline-block mt-3 border border-yellow-600 px-3 py-2 rounded-md text-yellow-500 hover:bg-yellow-600 hover:text-black"
                >Lihat detail</Link>
            </div>
        </div>
    )
}

export default ProductCard