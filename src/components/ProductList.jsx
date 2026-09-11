import ProductCard from "./ProductCard"

function ProductList({products}) {
    
    return (
        <div className="flex flex-wrap justify-center md:justify-normal gap-6 py-4 md:px-10 md:py-6">
            {products.map((product) => 
                <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                prices={product.prices}
                />
            )}
        </div>
    )
}

export default ProductList