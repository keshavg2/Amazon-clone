import React from 'react';
import './Home.css';
import Product from './Product.js';


function Home(){
  return(
      <div className="home">
          <img className="home_image" 
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
         
         <div className="home_row">
         <Product
            id="12321341"
            title="OnePlus 9 Pro 5G (Pine Green, 8GB RAM, 128GB  Storage), Qualcomm Snapdragon 888 Processor with Adreno 660 GPU"
            price={180}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/612ytK4luvL._SL1500_.jpg"
          />

          <Product
            id="12321341"
            title="Redmi Note 10 (Aqua Green, 4GB RAM, 64GB Storage),FHD+ (1080x2400) AMOLED Dot display, 16.33 centimeters (6.43 inch), 20:9 aspect ratio"
            price={200}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71OGzLCrjZS._SL1500_.jpg"
          />
          </div>

          <div className="home_row">
         <Product
            id="12321341"
            title="Tecno Spark 7 (Spruce Green, 2GB RAM, 32 GB Storage) - 6000mAh Battery|16 MP Dual Camera| 6.52” Dot Notch Display"
            price={100}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/719b6ihbwZS._SL1500_.jpg"
          />

          <Product
            id="12321341"
            title="Mi 10i 5G (Pacific Sunrise, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor | Extra INR 1,000 Off Through Coupons"
            price={300}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71gqTNkEkGL._SL1500_.jpg"
          />

         <Product
            id="12321341"
            title="OPPO Reno5 Pro 5G (Astral Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={500}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8145DElqceL._SL1500_.jpg"
          />
          </div>

          <div className="home_row">
         <Product
            id="12321341"
            title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue, 6.7-inch (17 cm diagonal) Super Retina XDR display"
            price={1600}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
          />

          
          </div>
          
          
                  

      </div>
  );
}

export default Home;