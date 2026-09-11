import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import products from "../data/products";

function Home() {

    const [search, setSearch] = useState("");

    // fungsi untuk search bar
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="min-h-screen bg-black text-white">

            {/* HEADER WEBSITE */}
            <div className="flex items-center justify-between px-4 py-5 md:px-10 mb-8">
                <h1 className="text-4xl font-bold">Wangi.<span className="text-yellow-500">in</span></h1>
                <Navbar />
            </div>

            {/* SEARCHBAR PRODUK */}
            <div className="mx-6 md:mx-10 mb-8 max-w-md">
                <input
                    type="text"
                    placeholder="Cari parfum..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-full border border-yellow-600 bg-[#222328] px-5 py-3
                            text-white outline-none
                            placeholder:text-gray-500
                            focus:ring-1 focus:ring-yellow-500"
                />
            </div>

            {/* LIST SEMUA PRODUK DISINI */}
            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <p className="mx-10 text-gray-400">
                    Parfum tidak ditemukan.
                </p>
            )}
        </div>
    )
}

export default Home;