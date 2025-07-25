import Depoiment from "@/pages/Depoiment/depoiment.page";
import FooterPage from "@/pages/Footer/footer.page";
import HomePage from "@/pages/Home/home.page";
import HepatoBurnOffer from "@/pages/Offer/offer.page";
import ProductsPage from "@/pages/Products/products.page";

export default function Home() {
  return (
    <>
      <div className="my-20 px-8">
        <HomePage />  
        <ProductsPage />
        <HepatoBurnOffer />
        <Depoiment
         />
      </div>
      <FooterPage />
    </>
  );
}
