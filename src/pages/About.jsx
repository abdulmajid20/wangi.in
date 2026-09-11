import Navbar from "../components/Navbar"

function About() {
    return (
        <div className="min-h-screen bg-black px-4 py-10 text-white md:px-10">

            {/* HEADER WEBSITE */}
            <div className="flex items-center justify-between px-4 py-5 md:px-10 mb-8">
                <h1 className="text-4xl font-bold">Wangi.<span className="text-yellow-500">in</span></h1>
                <Navbar />
            </div>

            <div className="mx-auto max-w-4xl">

                <h1 className="text-3xl font-bold text-yellow-500 md:text-4xl">
                    Tentang Wangi.in
                </h1>

                <p className="mt-6 leading-7 text-gray-400">
                    Wangi.in adalah toko parfum yang menyediakan berbagai pilihan
                    aroma dengan ukuran dan komposisi yang dapat disesuaikan
                    dengan kebutuhan pelanggan.
                </p>

                <p className="mt-4 leading-7 text-gray-400">
                    Pilih parfum, tentukan ukuran botol dan komposisi bibit,
                    lalu lakukan pemesanan dengan mudah melalui WhatsApp.
                </p>

            </div>

        </div>
    )
}

export default About