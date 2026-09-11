import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import { toRupiah } from 'to-rupiah';

function ProductDetail() {

    const {id} = useParams()
    const navigate = useNavigate()
 
    const [selectedSize, setSelectedSize] = useState("15 ML");
    const [selectedRatio, setSelectedRatio] = useState("1:1");
    const [quantity, setQuantity] = useState(1);

    // fungsi untuk atur kuantitas barang
    const increaseQty = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    // fungsi untuk mengambil detail produk
    const product = products.find((product) => {
        return product.id === Number(id);
    })

    if (!product) {
        return <h1>Product tidak ditemukan</h1>
    }
    
    const selectedPrice = product.prices[selectedSize][selectedRatio];
    const totalPrice = selectedPrice * quantity;

    // fungsi untuk order wa
    const handleBuy = () => {
        const message = `
            Hallo, saya ingin membeli:

            Parfum: ${product.name}
            Ukuran: ${selectedSize}
            Komposisi: ${selectedRatio}
            Jumlah: ${quantity} botol
            Harga: ${toRupiah(totalPrice, { dot: '.', floatingPoint: 0 })}
        `;

        const phoneNumber = "6285133658916";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
    }
    
    return (
        <div className="min-h-screen bg-zinc-950 p-4 md:p-8">

            {/* container */}
            <div className="mx-auto max-w-6xl">
                {/* =========================
                    TOMBOL KEMBALI
                ========================== */}
                <div className="mb-6">
                    <button 
                        className="inline-flex items-center gap-2 rounded-xl bg-yellow-600 px-5 py-3
                       text-sm font-semibold text-black shadow-md
                       transition duration-200 hover:-translate-x-1 hover:bg-yellow-600 hover:cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        {/* <!-- Arrow Left --> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Kembali ke produk
                    </button>
                </div>

                {/* =========================
                    PRODUCT DETAIL CARD
                ========================== */}
                <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                    <div className="grid min-h-120 grid-cols-1 md:grid-cols-2">

                        {/* =========================
                            BAGIAN GAMBAR
                        ========================== */}
                        <div className="relative flex items-center justify-center bg-[#fafafa] p-8 md:p-12">

                            {/* <!-- Product Image --> */}
                            <div className="flex w-full flex-1 items-center justify-center">
                                <img 
                                    className="h-auto max-h-[400px] w-full max-w-[500px]
                                   object-contain"
                                    src={`/img/${selectedSize}.png`} 
                                    alt={product.name} 
                                />
                            </div>

                        </div>

                        {/* <!-- =========================
                            BAGIAN DETAIL
                        ========================== --> */}
                        <div className="flex flex-col bg-[#292a2f] p-8 text-white md:p-10 lg:p-12">
                            {/* <!-- Detail --> */}
                            <span className="mb-2 text-xs font-bold uppercase tracking-wider text-[#f5c928]">
                                Detail Product
                            </span>

                            {/* <!-- Product Name --> */}
                            <h1 className="text-3xl font-bold md:text-4xl">
                                {product.name}
                            </h1>

                            {/* Description */}
                            <div className="mt-6">
                                <h3
                                    className="border-b-2 border-white pb-3 text-xs
                                        font-semibold uppercase"
                                >
                                    Description
                                </h3>
                                <p className="text-sm leading-6 text-gray-400">
                                    {product.desc}
                                    <span className="font-semibold text-[#f5c928]">
                                        read more
                                    </span>
                                </p>
                            </div>

                            {/* Product Option */}
                            <div className="mt-7 flex flex-col gap-4 md:gap-14 md:flex-row">

                                {/* Ukuran botol */}
                                <div className="min-w-[100px]">
                                    <label htmlFor="bottleSize" className="block mb-3 text-[12px] font-bold uppercase tracking-wider">
                                        Ukuran Botol:
                                    </label>

                                    <select 
                                        className="w-26 text-center hover:cursor-pointer border border-yellow-600 rounded-full px-2 py-2.5 text-yellow-500 bg-black" 
                                        id="bottleSize"
                                        value={selectedSize}
                                        onChange={(e) => setSelectedSize(e.target.value)}
                                    >
                                        <option value="15 ML">15 ML</option>
                                        <option value="30 ML">30 ML</option>
                                    </select>
                                </div>

                                {/* Komposisi Bibit */}
                                <div className="min-w-[100px]">
                                    <label htmlFor="ratio" className="block mb-3 text-[12px] font-bold uppercase tracking-wider">
                                        Komposisi Bibit:
                                    </label>

                                    <select 
                                        className="w-26 text-center hover:cursor-pointer border border-yellow-600 rounded-full px-2 py-2.5 text-yellow-500 bg-black" 
                                        id="ratio"
                                        value={selectedRatio}
                                        onChange={(e) => setSelectedRatio(e.target.value)}
                                    >
                                        <option value="1:1">1 : 1</option>
                                        <option value="2:1">2 : 1</option>
                                        <option value="Full Bibit">Full Bibit</option>
                                    </select>
                                </div>

                                {/* <!-- Quantity --> */}
                                <div className="min-w-[100px]">
                                    <p className="mb-3 text-[12px] font-bold uppercase tracking-wider">
                                        Quantity
                                    </p>

                                    <div
                                        className="flex w-fit items-center gap-4 px-4 py-2 border border-yellow-600 rounded-full text-yellow-500 bg-black"
                                    >
                                        <button
                                            onClick={decreaseQty}
                                            className="transition hover:text-white hover:cursor-pointer"
                                        >
                                            −
                                        </button>

                                        <span id="quantity" className="min-w-[20px] text-center">
                                            {quantity}
                                        </span>

                                        <button
                                            onClick={increaseQty}
                                            className="transition hover:text-white hover:cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-auto pt-8">

                            {/* <!-- total harga --> */}
                            <div
                                className="w-full rounded-full bg-[#222328] text-center text-white py-3 text-[15px] font-bold uppercase"
                            >
                                Total Harga {toRupiah(totalPrice, { dot: '.', floatingPoint: 0 })}
                            </div>

                            {/* <!-- beli ke wa --> */}
                            <button
                                onClick={handleBuy}
                                className="mt-3 w-full rounded-full bg-[#f5c928]
                                    py-3 text-xs font-bold uppercase text-[#292a2f]
                                    shadow-lg shadow-yellow-500/20 hover:cursor-pointer
                                    transition hover:bg-yellow-300
                                    hover:shadow-yellow-400/30"
                            >
                                BELI
                            </button>

                        </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductDetail;