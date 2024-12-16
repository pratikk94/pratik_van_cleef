import React, { useState, useEffect, useMemo } from "react";
import "./style.css";
// import "./vancleef.css";
import baseUrl from "../../utils/BaseUrl";

import { useDispatch, useSelector } from "react-redux";

import { CustomizationMiddleware } from "../../store/customize/customizationMiddleware";
import { DeleteProductsMiddleware } from "../../store/products/deleteProductsMiddleware";
const MainPageO = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [items, setItems] = useState({
    shapesUserSelected: [],
    colorsUserSelected: [],
    widthsUserSelected: [],
    settingsHeightUserSelected: [],
    ringSizeUserSelected: [],
    metalsUserSelected: [],
    prongStyleUserSelected: [],
    bespokeCustomisations: [],
    birthstonesUserSelected: [],
    gemstonesUserSelected: [],
    bespokeCustomisationsUserSelected: [],
    metalTypesUserSelected: [],
  });
  // const [data, setData] = useState({
  //   shapes: [],
  //   colors: [],
  //   widths: [],
  //   settingsHeight: [],
  //   ringSize: [],
  //   prongStyle: [],
  //   birthstones: [],
  //   gemstones: [],
  // });

  // Get data from Redux store
  const {
    gemShapes,
    gemStoneColors,
    birthStones,
    gemStones,
    prongStyles,
    ringSizes,
    bandWidths,
    settingHeights,
    bespokeCustomizations,
    bespokeWithTypes,
    accentStoneTypes,
  } = useSelector((state) => state.customization);

  const { products: allProducts } = useSelector((state) => state.products);
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);

  const filterImages = (type, value) => {
    if (type === "stoneType") {
      const filteredProducts = products.filter(
        (product) => product?.product_customizations?.gem_shape_id === value
      );
      setProducts(filteredProducts);
    } else if (type === "color") {
      const filteredProducts = products.filter(
        (product) => product?.product_customizations?.default_metal_id === value
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    // Fetch all customization data at once
    const formData = {
      skip: 0,
      take: 10,
    };

    dispatch(CustomizationMiddleware.fetchAllCustomizationData());

    dispatch(DeleteProductsMiddleware.GetAllProducts(formData));
  }, [dispatch]);

  // Update items state to use Redux data
  const data = useMemo(
    () => ({
      shapes: gemShapes,
      colors: gemStoneColors,
      widths: bandWidths,
      settingsHeight: settingHeights,
      ringSize: ringSizes,
      prongStyle: prongStyles,
      birthstones: birthStones,
      gemstones: gemStones,
      accentStoneTypes: accentStoneTypes,
      bespokeCustomizations: bespokeCustomizations,
      bespokeWithTypes: bespokeWithTypes,
    }),
    [
      gemShapes,
      gemStoneColors,
      bandWidths,
      settingHeights,
      ringSizes,
      prongStyles,
      birthStones,
      gemStones,
      accentStoneTypes,
      bespokeCustomizations,
      bespokeWithTypes,
    ]
  );

  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);

  useEffect(() => {
    showContent(2);

    setItems({
      ...items,
      shapesUserSelected: Number(
        selectedProduct?.product_customizations?.gem_shape_id
      ),
      metalsUserSelected: Number(
        selectedProduct?.product_customizations?.default_metal_id
      ),
      widthsUserSelected:
        selectedProduct?.product_customizations?.band_width_ids
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map(Number),
      settingsHeightUserSelected:
        selectedProduct?.product_customizations?.setting_height_ids
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map(Number),
      ringSizeUserSelected:
        selectedProduct?.product_customizations?.ring_size_ids
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map(Number),
      prongStyleUserSelected:
        selectedProduct?.product_customizations?.prong_style_ids
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map(Number),
      birthstonesUserSelected:
        selectedProduct?.product_customizations?.birth_stone_ids
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map(Number),
      gemstonesUserSelected:
        selectedProduct?.product_customizations?.accent_stone_type_ids
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map(Number),
      bespokeCustomisationsUserSelected:
        selectedProduct?.product_customizations?.bespoke_customization_ids
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map(Number),
      metalTypesUserSelected:
        selectedProduct?.product_customizations?.metal_types
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map(Number),
    });
  }, [selectedProduct]);

  const [activeTab, setActiveTab] = useState(1);

  const showContent = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    showContent(1);
  }, []);

  const changeMainImage = (imageSrc) => {
    const mainImage = document.getElementById("mainProductImage");
    if (mainImage) {
      mainImage.src = imageSrc;
    }
  };

  // const addBirthstoneToSelection = (ids) => {

  //   const slots = document.querySelectorAll(".selectable-div7");
  //   for (let slot of slots) {
  //     if (!slot.style.backgroundImage) {
  //       slot.style.backgroundImage = `url(${imageSrc})`;
  //       return;
  //     }
  //   }
  //   alert(
  //     "All slots are filled. Click a slot to clear it and add a new birthstone."
  //   );
  // };

  const selectShape = (shape) => {
    document.querySelectorAll(".gemstone-buttons button").forEach((button) => {
      button.classList.toggle("active", button.textContent.includes(shape));
    });
    const isOval = shape === "Oval";
    document.getElementById("ovalMoissaniteTable").style.display = isOval
      ? "table"
      : "none";
    document.getElementById("ovalLabGrownDiamondTable").style.display = isOval
      ? "table"
      : "none";
    document.getElementById("pearMoissaniteTable").style.display = !isOval
      ? "table"
      : "none";
    document.getElementById("pearLabGrownDiamondTable").style.display = !isOval
      ? "table"
      : "none";
    selectGemstone("Moissanite");
  };

  const selectGemstone = (type) => {
    document.querySelectorAll(".gemstone-type div").forEach((div) => {
      div.classList.toggle("active", div.textContent === type);
    });
    const isOval = document
      .querySelector(".gemstone-buttons button.active")
      ?.textContent.includes("Oval");
    document.getElementById("ovalMoissaniteTable").style.display =
      isOval && type === "Moissanite" ? "table" : "none";
    document.getElementById("ovalLabGrownDiamondTable").style.display =
      isOval && type === "Lab Grown Diamond" ? "table" : "none";
    document.getElementById("pearMoissaniteTable").style.display =
      !isOval && type === "Moissanite" ? "table" : "none";
    document.getElementById("pearLabGrownDiamondTable").style.display =
      !isOval && type === "Lab Grown Diamond" ? "table" : "none";
  };

  // const toggleAccordion = (row) => {
  //   const contentRow = row.nextElementSibling;
  //   if (contentRow && contentRow.classList.contains("accordion-content")) {
  //     contentRow.style.display =
  //       contentRow.style.display === "table-row" ? "none" : "table-row";
  //   }
  // };

  useEffect(() => {
    selectShape("Oval");
  });

  return (
    <>
      <div className="banner-home">
        <img src="../img/homebanner.jpg" alt="Banner" />
        <div className="banner-content">
          <h1
            style={{
              color: "white",
              fontFamily: "Judson, serif",
              fontSize: "6vh",
            }}
          >
            Timeless elegance
          </h1>
          <p style={{ fontFamily: "Judson, serif", fontSize: "2vh" }}>
            Culminating on the wrist or suspended from the neck, jewelry watches
            offer time a precious setting
          </p>
          <a href="https://test.com" className="click-link upt">
            Contemplate the passing of time
          </a>
        </div>
      </div>

      <div className="tab-container">
        <div
          className="tab active"
          style={{ zIndex: 10 }}
          onClick={() => showContent(1)}
        >
          1. Select your Setting
        </div>
        <div
          className="tab"
          style={{ zIndex: 9 }}
          onClick={() => showContent(2)}
        >
          2. Customise your Setting
        </div>
        <div
          className="tab"
          style={{ zIndex: 8 }}
          onClick={() => showContent(3)}
        >
          3. Bespoke Customisations
        </div>
        <div
          className="tab"
          style={{ zIndex: 7 }}
          onClick={() => showContent(4)}
        >
          4. Select your Gemstone
        </div>
      </div>

      <div
        className={`tab-content ${activeTab === 1 ? "active" : "hidden"}`}
        id="content1"
      >
        <div className="container my-4">
          <div className="filters">
            <div className="row">
              <div
                id="class-filter-buttons"
                className="mb-3 col-lg-6 col-sm-12 class-filter-buttons"
              >
                <p>Select Gemstone Type</p>
                <div className="btn-images">
                  {data?.shapes?.map((item, index) => {
                    return (
                      <div
                        className="btn-img1 me-2"
                        onClick={() => filterImages("stoneType", item.id)}
                        aria-label={item.name}
                      >
                        <img
                          className="img-fluid rounded-circle"
                          src={item.image}
                          alt={item.name}
                          title={item.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                id="category-filter-buttons"
                className="mb-4 col-lg-6 col-sm-12 category-filter-buttons"
              >
                <p>Select Metal Type</p>
                <div id="category-filter-buttons" className="mb-4">
                  <div className="row">
                    {data?.colors?.map((item, index) => {
                      return (
                        <div className="col-3">
                          <label className="radio-container">
                            <input
                              className={`${item.name}`}
                              type="radio"
                              name="metalType"
                              value={item.name}
                              onClick={() => filterImages("color", item.id)}
                            />
                            <span className={`checkmark-${item.name}`}></span>
                            <img src={item.image} alt={item.name} />
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row" id="image-grid">
            {/* <!-- Image Grid --> */}
            {products?.map((product, index) => {
              if (product?.sub_category?.id === 1) {
                return (
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                    <img
                      src={baseUrl + "/" + product?.image[0]?.image}
                      alt={product.title}
                      className={`img-fluid ${product?.product_customizations?.gem_shape_id} ${product?.product_customizations?.default_metal_id}`}
                      onClick={() => setSelectedProduct(product)}
                    />
                    <p className="mt-2 mb-1 text-center">{product.title}</p>
                    <p className="text-center text-muted">{product.price}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <div
        className={`tab-content ${activeTab === 2 ? "active" : "hidden"}`}
        id="content2"
      >
        <div className="product-info-1">
          <div className="prdctz">
            <div className="row">
              <div className="col-md-7">
                <div className="products-showcase">
                  <div className="thglry">
                    <div className="glrpic">
                      <img
                        src={baseUrl + "/" + selectedProduct?.image[0]?.image}
                        alt={selectedProduct?.title}
                        onClick={() =>
                          changeMainImage(selectedProduct?.image[0]?.image)
                        }
                      />
                    </div>
                    <div className="glrpic">
                      <img
                        src="../img/image02.jpg"
                        alt="Thumbnail 2"
                        onClick="changeMainImage('image02.jpg')"
                      />
                    </div>
                    <div className="glrpic">
                      <img
                        src="../img/image03.jpg"
                        alt="Thumbnail 3"
                        onClick="changeMainImage('image03.jpg')"
                      />
                    </div>
                    <div className="glrpic">
                      <img
                        src="../img/image04.jpg"
                        alt="Thumbnail 4"
                        onClick="changeMainImage('image04.jpg')"
                      />
                    </div>
                    <div className="glrpic">
                      <img
                        src="../img/image04.jpg"
                        alt="Thumbnail 4"
                        onClick="changeMainImage('image04.jpg')"
                      />
                    </div>
                  </div>
                  <div className="text-center main-image">
                    <img
                      id="mainProductImage"
                      src="../img/image01.jpg"
                      alt="Main Product"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Right Sidebar: Product Options --> */}
              <div className="col-md-5">
                <div className="product-options">
                  <div className="form-group">
                    <label className="big-text">Precious Metal Type</label>
                    <div id="category-filter-buttons" className="mb-4">
                      <div className="row">
                        <div className="col-4">
                          <label className="radio-container">
                            <input
                              className="platinum"
                              type="radio"
                              name="metalType"
                              value="Platinum"
                              onClick={() =>
                                filterImages("category", "Platinum")
                              }
                            />
                            <span className="checkmark-platinum "></span>{" "}
                            Platinum
                          </label>
                        </div>
                        <div className="col-4">
                          <label className="radio-container">
                            <input
                              type="radio"
                              name="metalType"
                              value="Yellow Gold"
                              onClick={() =>
                                filterImages("category", "Yellow Gold")
                              }
                            />
                            <span className="checkmark-yellow-gold"></span>
                            Yellow Gold
                          </label>
                        </div>
                        <div className="col-4">
                          <label className="radio-container">
                            <input
                              type="radio"
                              name="metalType"
                              value="Rose Gold"
                              onClick={() =>
                                filterImages("category", "Rose Gold")
                              }
                            />
                            <span className="checkmark-rose-gold"></span> Rose
                            Gold
                          </label>
                        </div>
                        <div className="col-4">
                          <label className="radio-container">
                            <input
                              type="radio"
                              name="metalType"
                              value="White Gold"
                              onClick={() =>
                                filterImages("category", "White Gold")
                              }
                            />
                            <span className="checkmark-white-gold"></span> White
                            Gold
                          </label>
                        </div>
                        <div className="col-4">
                          <label className="radio-container">
                            <input
                              type="radio"
                              name="metalType"
                              value="Silver"
                              onClick={() => filterImages("category", "Silver")}
                            />
                            <span className="checkmark-platinum"></span> Silver
                          </label>
                        </div>
                        <div className="col-4">
                          <label className="radio-container">
                            <input
                              type="radio"
                              name="metalType"
                              value="Titanium"
                              onClick={() =>
                                filterImages("category", "Titanium")
                              }
                            />
                            <span className="checkmark-yellow-gold"></span>{" "}
                            Titanium
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="metalKarat" className="big-text">
                      Metal Karat
                    </label>
                    <div className="select-padding">
                      <select className="form-control border" id="metalKarat">
                        <option>Select Metal Type</option>
                        <option>14K</option>
                        <option>18K</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="bandWidth" className="big-text">
                      Band Width
                    </label>
                    <div className="selectables normal-text">
                      {items?.widthsUserSelected?.map((item, index) => {
                        const width = data?.widths?.find(
                          (width) => width.id === item
                        );
                        return (
                          <div className="selectable-div border">
                            <input
                              type="radio"
                              id={`width-${index}`}
                              name="bandWidth"
                              value={width?.name}
                            />
                            <label htmlFor={`width-${index}`}>
                              {width?.name}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="gemstoneType" className="big-text">
                      Band Gemstone Type
                    </label>
                    <div className="select-padding">
                      <select className="form-control border" id="gemstoneType">
                        <option>Select Band Gemstone Type</option>
                        {items?.gemstonesUserSelected?.map((item, index) => {
                          const shape = data?.accentStoneTypes?.find(
                            (shape) => shape?.id === item
                          );
                          return <option>{shape?.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="ringSize" className="big-text">
                      Ring Size
                    </label>
                    <div className="select-padding">
                      <select className="form-control border" id="ringSize">
                        <option>Select Ring Size</option>
                        {items?.ringSizeUserSelected?.map((item, index) => {
                          const size = data?.ringSize?.find(
                            (size) => size?.id === item
                          );
                          return <option>{size?.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="form-group ">
                    <label for="bandWidth" className="big-text">
                      Prong Style
                    </label>
                    <div className="selectables normal-text">
                      {items?.prongStyleUserSelected?.map((item, index) => {
                        const style = data?.prongStyle?.find(
                          (style) => style?.id === item
                        );
                        return (
                          <div className="selectable-div border">
                            <input
                              type="radio"
                              id={`prong-${index}`}
                              name="prongStyle"
                              value={item.name}
                            />
                            <label htmlFor={`prong-${index}`}>
                              {style?.name}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="full-width-btns normal-text">
                    <button className="button1" onClick={() => showContent(1)}>
                      BACK
                    </button>
                    <button className="button2" onClick={() => showContent(3)}>
                      NEXT STEP
                    </button>
                  </div>
                  <div className="extra-links normal-text">
                    <a href="https://google.com">send a link</a>
                    <a href="https://google.com">Book Appointment</a>
                    <a href="https://google.com" className="normal-text">
                      Talk to an expert
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tab-content ${activeTab === 3 ? "active" : "hidden"}`}
        id="content3"
      >
        <div className="product-info-1">
          <div className="prdctz">
            <div className="row">
              {/* <!-- Left Sidebar: Thumbnail Gallery --> */}
              <div className="col-md-7">
                <div className="products-showcase">
                  <div className="thglry">
                    <div className="glrpic">
                      <img
                        src="../img/image01.jpg"
                        alt="Thumbnail 1"
                        onClick="changeMainImage('image01.jpg')"
                      />
                    </div>
                    <div className="glrpic">
                      <img
                        src="../img/image02.jpg"
                        alt="Thumbnail 2"
                        onClick="changeMainImage('image02.jpg')"
                      />
                    </div>
                    <div className="glrpic">
                      <img
                        src="../img/image03.jpg"
                        alt="Thumbnail 3"
                        onClick="changeMainImage('image03.jpg')"
                      />
                    </div>
                    <div className="glrpic">
                      <img
                        src="../img/image04.jpg"
                        alt="Thumbnail 4"
                        onClick="changeMainImage('image04.jpg')"
                      />
                    </div>
                  </div>
                  <div className="text-center main-image">
                    <img
                      id="mainProductImage"
                      src="../img/image01.jpg"
                      alt="Main Product"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Right Sidebar: Customization Options --> */}
              <div className="col-md-5">
                <div className="product-options">
                  {/* <!-- Bespoke Customisations --> */}
                  <div className="form-group">
                    <label>
                      <strong>Bespoke Customisations</strong>
                    </label>

                    {items?.bespokeCustomisationsUserSelected?.map(
                      (item, index) => {
                        const customization = data?.bespokeWithTypes?.find(
                          (customization) => customization?.id === item
                        );
                        console.log(
                          customization,
                          item,
                          data?.bespokeWithTypes
                        );

                        return (
                          <div className="custom-option">
                            <img
                              src={baseUrl + "/" + customization?.image}
                              alt={customization?.name}
                            />

                            <div>
                              <div className="custom-contents">
                                <label>
                                  <strong>{customization?.name}</strong>
                                </label>
                                {customization?.bsp_type?.map((i, index) => {
                                  return (
                                    <div>
                                      <input
                                        type="radio"
                                        name="stone"
                                        value={i?.name}
                                      />{" "}
                                      {i?.name} | USD {i?.price}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>

                  {/* <!-- Hidden Birthstones --> */}
                  <div className="form-group">
                    <label>Hidden Birthstones</label>
                    <p className="normal-text">
                      Add sentimental meaning to your dream ring.
                    </p>
                    <div className="hidden-birthstones">
                      {items?.birthstonesUserSelected?.map((item, index) => {
                        const birthstone = data?.birthstones?.find(
                          (birthstone) => birthstone?.id === item
                        );
                        return (
                          <div className="birthstone-details">
                            <img
                              src={birthstone?.image}
                              alt={birthstone?.name}
                              title={birthstone?.name}
                              // onClick={() => addBirthstoneToSelection(birthstone?.id)}
                            />{" "}
                            <p className="normal-text">{birthstone?.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* <!-- Birthstone Selection --> */}
                  {/* <div className="form-group">
                    <label>Birthstone Selection</label>
                    <p className="normal-text">
                      Select up to four Hidden Gemstones and their placement
                      within your band.
                    </p>
                    <div className="selectables">
                      <div
                        className="selectable-div7"
                        onClick="clearBirthstone(this)"
                      ></div>
                      <div
                        className="selectable-div7"
                        onClick="clearBirthstone(this)"
                      ></div>
                      <div
                        className="selectable-div7"
                        onClick="clearBirthstone(this)"
                      ></div>
                      <div
                        className="selectable-div7"
                        onClick="clearBirthstone(this)"
                      ></div>
                    </div>
                  </div> */}

                  <div className="form-group">
                    <label className="big-text">Complimentary Engraving</label>
                    <div className="normal-text">
                      <p>
                        Personalise your dream ring with engraving. If you wish
                        to add this to your ring, it will be laser engraved on
                        the inside of your band.
                      </p>
                    </div>
                    <div className="customize">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="A name, date, initials, or a word"
                        maxlength="20"
                      />
                    </div>
                  </div>

                  {/* <!-- Navigation Buttons --> */}
                  <div className="form-group">
                    <div className="full-width-btns normal-text">
                      <button
                        type="button"
                        className="button1"
                        onClick={() => showContent(2)}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="button2"
                        onClick={() => showContent(4)}
                      >
                        Next Step
                      </button>
                    </div>
                  </div>

                  <div className="extra-links">
                    <a href="https://google.com">Book Appointment</a>
                    <a href="https://google.com">Talk to an expert</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tab-content ${activeTab === 4 ? "active" : "hidden"}`}
        id="content4"
      >
        <div className="gemstone-selection">
          <h2>Select Your Gemstone</h2>

          {/* <!-- Shape Buttons --> */}
          <div className="gemstone-buttons">
            <button className="active" onClick="selectShape('Oval')">
              Select Oval
            </button>
            <button onclick="selectShape('Pear')">Select Pear</button>
          </div>

          {/* <!-- Gemstone Types --> */}
          <div className="gemstone-type">
            <button className="active" onClick="selectGemstone('Moissanite')">
              <p className="btn-txt-main">Moissanite</p>
              <a href="https://google.com" className="btn-txt">
                Learn More
              </a>
            </button>
            <button
              className="active"
              onClick="selectGemstone('Lab Grown Diamond')"
            >
              <p className="btn-txt-main">Lab Grown Diamond</p>
              <a href="https://google.com" className="btn-txt">
                Learn More
              </a>
            </button>
          </div>

          {/* <!-- Oval Moissanite Table --> */}
          <div className="table-container">
            <table
              id="ovalMoissaniteTable"
              className="table table-bordered active"
            >
              <thead>
                <tr>
                  <th>Carat</th>
                  <th>Colour</th>
                  <th>Clarity</th>
                  <th>Faceting</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick="toggleAccordion(this)">
                  <td>1ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 1,789,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colSpan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>2.75ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.25ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.28ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.75ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />{" "}
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr onClick="toggleAccordion(this)">
                  <td>2.50ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <!-- Additional tables with five rows for each gemstone type --> */}

            <table
              id="ovalLabGrownDiamondTable"
              className="table table-bordered"
            >
              <thead>
                <tr>
                  <th>Carat</th>
                  <th>Colour</th>
                  <th>Clarity</th>
                  <th>Faceting</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick="toggleAccordion(this)">
                  <td>2.75ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>3.25ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.40ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.25ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>3.25ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table id="pearMoissaniteTable" className="table table-bordered">
              <thead>
                <tr>
                  <th>Carat</th>
                  <th>Colour</th>
                  <th>Clarity</th>
                  <th>Faceting</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick="toggleAccordion(this)">
                  <td>1.50ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.25ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.00ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>2.25ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.5ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              id="pearLabGrownDiamondTable"
              className="table table-bordered"
            >
              <thead>
                <tr>
                  <th>Carat</th>
                  <th>Colour</th>
                  <th>Clarity</th>
                  <th>Faceting</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick="toggleAccordion(this)">
                  <td>4.15ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.25ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>3.25ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.45ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr onClick="toggleAccordion(this)">
                  <td>1.25ct</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>VVS1</td>
                  <td>
                    <span className="dropdown-cell">
                      <i className="fas fa-chevron-down" />
                    </span>
                  </td>
                  <td>USh 2,535,000.00</td>
                </tr>
                <tr className="accordion-content">
                  <td colspan="5">
                    <div className="accordion-details">
                      <div className="accord-deets">
                        <div className="details-column">
                          <p>
                            <strong>Shape:</strong> Oval
                          </p>
                          <p>
                            <strong>Carat Equivalent:</strong> 1.25ct
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Dimension:</strong> 7.5x5.5mm
                          </p>
                          <p>
                            <strong>Cut:</strong> Excellent
                          </p>
                        </div>
                        <div className="details-column">
                          <p>
                            <strong>Colour:</strong> D
                          </p>
                          <p>
                            <strong>Price:</strong> USh 2,535,000.00
                          </p>
                        </div>
                      </div>
                      <div className="button-row">
                        <select>
                          <option>Select Gemstone Faceting</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <select>
                          <option>Select Moissanite Colour</option>
                          {/* <!-- Other options here --> */}
                        </select>
                        <button>Select Gemstone</button>
                      </div>
                      <div className="more-info">
                        <span>More Gemstone Information</span>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="buttons">
            <button>Send a Hint</button>
            <button className="button1" onClick={() => showContent(3)}>
              BACK
            </button>
            <button>Ring Summary</button>
          </div>
        </div>
      </div>

      <div className="why-us txt1">
        <div className="row">
          <div className="col-lg-12">
            <div className="top-mid-text">
              <h6>Made To Order For You</h6>
              <p>
                We're here for the journey with you. Our Bespoke Process allows
                us to work with through the <br />
                design process, so we can meticulously bring to life your dream
                ring.
              </p>
            </div>
          </div>
        </div>

        <div className="why-us-cards ">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="why-us-card-1">
                <div className="image-holder">
                  <img src="../img/why-us-pic-1.webp" alt="" />
                </div>
                <p>Memorable and Personal</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="why-us-card-1">
                <div className="image-holder">
                  <img src="../img/why-us-pic-2.webp" alt="" />
                </div>
                <p>Bespoke, One of A Kind</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="why-us-card-1">
                <div className="image-holder">
                  <img src="../img/why-us-pic-3.webp" alt="" />
                </div>
                <p>Expertly Crafted In Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="accordion-sxn txt1">
        <div className="row">
          <div className="col-lg-12">
            <div className="top-mid-text2">
              <h6>About Us</h6>
              <p>
                We're here for the journey with you. Our Bespoke Process allows
                us to work with through the <br />
                design process, so we can meticulously bring to life your dream
                ring.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="acccc">
              <div className="accholder">
                <button className="accordion">Book a consultation</button>
                <div className="panel">
                  <p>
                    Wherever you are in the world, be guided on your journey by
                    our expert consultants. We have two showrooms located in
                    Sydney and Brisbane, as well as offering Virtual
                    Consultations. Book Your Appointment.
                  </p>
                </div>
              </div>

              <div className="accholder">
                <button className="accordion">Production Timeframes</button>
                <div className="panel">
                  <p>
                    We lovingly craft our pieces in Australia, all being bespoke
                    and made to order, with the exception of our Ready To
                    Propose Collection.
                    <br />
                    Our Standard Crafting Timeframe is 8-10 weeks.
                    <br />
                    Our Priority Crafting Timeframe is 4-6 weeks.
                    <br />
                    Please note, we have a Holiday Crafting Deadline of
                    September 30th if you wish to receive your piece before
                    Christmas.
                    <br />
                    Learn more about our production timeframes and our craft,
                    here.
                  </p>
                </div>
              </div>

              <div className="accholder">
                <button className="accordion">
                  Payment Options & Ring Shippings
                </button>
                <div className="panel">
                  <p>
                    At TMC, we provide a variety of payment plans including
                    Afterpay, Humm, ZipPay, and PayIn4 through PayPal. All of
                    these payment plans divide the total amount into smaller
                    fees to be paid in increments over a certain period. They
                    are completely interest free and can be selected and
                    implemented at the payment checkout.
                    <br />
                    Upon your rings completion, you have the ability to book an
                    appointment to collect your ring from our Sydney or Brisbane
                    Showrooms, if you're located locally.
                    <br />
                    For all of our interstate and international clients, we
                    offer complimentary express-insured shipping via DHL.
                  </p>
                </div>
              </div>

              <div className="accholder">
                <button className="accordion">
                  Lifetime warranty and our commitment
                </button>
                <div className="panel">
                  <p>
                    We proudly offer a lifetime warranty on all of our pieces.
                    Learn more here.
                  </p>
                </div>
              </div>

              <div className="accholder">
                <button className="accordion">International clients</button>
                <div className="panel">
                  <p>
                    Wherever you are in the world, we can journey with you to
                    bring your dream ring to life. We offer complimentary Online
                    Consultations, thorough crafting updates and free
                    insured-express shipping via DHL to ensure your ring arrives
                    to you swiftly and safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end of accordion --> */}

      {/* <!-- start of section-our-promise --> */}
      <section className="section-our-promise txt1">
        <div className="row">
          <div className="col-lg-6">
            <div className="our-process">
              <h6>Our Process</h6>
              <p>
                Lovingly designed and crafted in Australia. A craft thousands of
                years old, meets modern sustainable practices and design. Each
                ring is created with intention, unrivalled craftsmanship and
                most importantly passion. We walk the journey with you to create
                your dream bespoke ring, from our Signature Range or a
                one-of-a-kind custom commission.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our-process">
              <h6>Our Promise</h6>
              <p>Crafted to order, for you in 8-12 weeks</p>
              <p>Lifetime Warranty for all our pieces</p>
              <p>Gemstone Certification and authenticity</p>
              <p>Complimentary Ring Resizing for your piece</p>
              <p>
                Responsibly Crafted In Australia from ethically sourced
                materials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end of section-our-promise --> */}

      {/* <!-- start of video1 --> */}

      <section className="video1">
        <video autoPlay muted loop className="video-background">
          <source src="../videos/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* <!-- end of video1 --> */}
    </>
  );
};

export default MainPageO;
