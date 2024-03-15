import {useProductContext} from "../Context/ProductContext"
import Product from "./Product"


const FeatureProduct = () => {
    const {isLoading, featureProducts} = useProductContext()
    
    if(isLoading){
        return <div>.........Loading</div>
    }

  return (
    <div className="p-5 mt-10 mb-6 w-full h-auto">
      <div className="ml-20 text-sm">Check Now!</div>
      <div className="ml-20 mb-10 text-3xl font-semibold">Our Feauture Services</div>
      <div className="flex flex-col justify-around md:flex-row">
        {
            featureProducts.map((curElem) =>{
                return <Product key={curElem.id} {...curElem}/>
            })
        }
      </div>
    </div>
  )
}

export default FeatureProduct
