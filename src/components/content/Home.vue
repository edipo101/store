<template>
	<div class="left-sidebar">
		<div id="content" class="site-content" tabindex="-1">
			<div class="container">

				<nav class="woocommerce-breadcrumb" ><a href="home.html">Home</a><span class="delimiter"><i class="fa fa-angle-right"></i></span>Laptops &amp; Computers</nav>

				<div id="primary" class="content-area">
					<main id="main" class="site-main">
						<section>
							<header>
								<h2 class="h1">{{category.name}}</h2>
							</header>
							<!-- <div class="woocommerce columns-4">
								<ul class="product-loop-categories">
									<li class="product-category product first">
										<a href="cat-3-col.html">
											<img src="assets/images/product-category/img1.jpg" alt="Accessories" width="250" height="232" />
											<h3>Accessories <mark class="count">(2)</mark></h3>
										</a>
									</li>
									<li class="product-category product">
										<a href="cat-3-col.html"><img src="assets/images/product-category/img2.jpg" alt="All in One" width="250" height="232" /><h3>All in One <mark class="count">(1)</mark></h3>
										</a>
									</li>
									<li class="product-category product"><a href="cat-3-col.html"><img src="assets/images/product-category/img3.jpg" alt="Gaming" width="250" height="232" /><h3>Gaming <mark class="count">(1)</mark></h3></a></li>
									<li class="product-category product last"><a href="cat-3-col.html"><img src="assets/images/product-category/img4.jpg" alt="Laptops" width="250" height="232" /><h3>Laptops <mark class="count">(6)</mark></h3></a></li>
									<li class="product-category product first"><a href="cat-3-col.html"><img src="assets/images/product-category/11.jpg" alt="Mac Computers" width="250" height="232" /><h3>Mac Computers <mark class="count">(1)</mark></h3></a></li>
									<li class="product-category product"><a href="cat-3-col.html"><img src="assets/images/product-category/12.jpg" alt="Peripherals" width="250" height="232" /><h3>Peripherals <mark class="count">(1)</mark></h3></a></li>
									<li class="product-category product"><a href="cat-3-col.html"><img src="assets/images/product-category/13.jpg" alt="Servers" width="250" height="232" /><h3>Servers <mark class="count">(1)</mark></h3></a></li>
									<li class="product-category product last"><a href="cat-3-col.html"><img src="assets/images/product-category/14.jpg" alt="Ultrabooks" width="250" height="232" /><h3>Ultrabooks <mark class="count">(1)</mark></h3></a></li>
									<li class="product-category product last"><a href="cat-3-col.html"><img src="assets/images/product-category/14.jpg" alt="Ultrabooks" width="250" height="232" /><h3>Ultrabooks <mark class="count">(1)</mark></h3></a></li>
								</ul>
							</div> -->
							<div class="woocommerce columns-4">
								<ul class="product-loop-categories">
									<li class="product-category product" v-for="subcat in category.subcategories" :key="subcat.id">
										<a href="#">
											<img :src="subcat.image" alt="Accessories" width="250" height="232" />
												<h3>{{subcat.name}} 
													<mark class="count">(2)</mark>
												</h3>
										</a>
									</li>
								</ul>
							</div>
						</section>

						<section class="section-product-cards-carousel" >
							<header><h2 class="h1">Best Sellers</h2></header>
							<div id="home-v-product-cards-careousel">
								<div class="woocommerce columns-2 home-v1-product-cards-carousel product-cards-carousel owl-carousel">

									<ul class="products columns-2">
										<li class="product product-card first">

											<div class="product-outer">
												<div class="media product-inner">

													<a class="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
														<img class="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/6.jpg" alt="">

													</a>

													<div class="media-body">
														<span class="loop-product-categories">
															<a href="product-category.html" rel="tag">Peripherals</a>
														</span>

														<a href="single-product.html">
															<h3>External SSD USB 3.1  750 GB</h3>
														</a>

														<div class="price-add-to-cart">
															<span class="price">
																<span class="electro-price">
																	<ins><span class="amount"> </span></ins>
																	<span class="amount"> $600</span>
																</span>
															</span>

															<a href="cart.html" class="button add_to_cart_button">Add to cart</a>
														</div><!-- /.price-add-to-cart -->

														<div class="hover-area">
															<div class="action-buttons">

																<a href="#" class="add_to_wishlist">
																Wishlist</a>

																<a href="#" class="add-to-compare-link">Compare</a>
															</div>
														</div>

													</div>
												</div><!-- /.product-inner -->
											</div><!-- /.product-outer -->

										</li><!-- /.products -->
										<li class="product product-card last">

											<div class="product-outer">
												<div class="media product-inner">

													<a class="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
														<img class="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/4.jpg" alt="">

													</a>

													<div class="media-body">
														<span class="loop-product-categories">
															<a href="product-category.html" rel="tag">TVs</a>
														</span>

														<a href="single-product.html">
															<h3>Widescreen 4K SUHD TV</h3>
														</a>

														<div class="price-add-to-cart">
															<span class="price">
																<span class="electro-price">
																	<ins><span class="amount"> </span></ins>
																	<span class="amount"> $800</span>
																</span>
															</span>

															<a href="cart.html" class="button add_to_cart_button">Add to cart</a>
														</div><!-- /.price-add-to-cart -->

														<div class="hover-area">
															<div class="action-buttons">

																<a href="#" class="add_to_wishlist">
																Wishlist</a>

																<a href="#" class="add-to-compare-link">Compare</a>
															</div>
														</div>

													</div>
												</div><!-- /.product-inner -->
											</div><!-- /.product-outer -->

										</li><!-- /.products -->
									</ul>
									<ul class="products columns-2">
										<li class="product product-card first">

											<div class="product-outer">
												<div class="media product-inner">

													<a class="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
														<img class="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/3.jpg" alt="">

													</a>

													<div class="media-body">
														<span class="loop-product-categories">
															<a href="product-category.html" rel="tag">Smartphones</a>
														</span>

														<a href="single-product.html">
															<h3>Notebook Purple G752VT-T7008T</h3>
														</a>

														<div class="price-add-to-cart">
															<span class="price">
																<span class="electro-price">
																	<ins><span class="amount"> $3,788.00</span></ins>
																	<del><span class="amount">$4,780.00</span></del>
																	<span class="amount"> </span>
																</span>
															</span>

															<a href="cart.html" class="button add_to_cart_button">Add to cart</a>
														</div><!-- /.price-add-to-cart -->

														<div class="hover-area">
															<div class="action-buttons">

																<a href="#" class="add_to_wishlist">
																Wishlist</a>

																<a href="#" class="add-to-compare-link">Compare</a>
															</div>
														</div>

													</div>
												</div><!-- /.product-inner -->
											</div><!-- /.product-outer -->

										</li><!-- /.products -->
										<li class="product product-card last">

											<div class="product-outer">
												<div class="media product-inner">

													<a class="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
														<img class="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/2.jpg" alt="">

													</a>

													<div class="media-body">
														<span class="loop-product-categories">
															<a href="product-category.html" rel="tag">Headphone Cases</a>
														</span>

														<a href="single-product.html">
															<h3>Universal Headphones Case in Black</h3>
														</a>

														<div class="price-add-to-cart">
															<span class="price">
																<span class="electro-price">
																	<ins><span class="amount"> </span></ins>
																	<span class="amount"> $1500</span>
																</span>
															</span>

															<a href="cart.html" class="button add_to_cart_button">Add to cart</a>
														</div><!-- /.price-add-to-cart -->

														<div class="hover-area">
															<div class="action-buttons">

																<a href="#" class="add_to_wishlist">
																Wishlist</a>

																<a href="#" class="add-to-compare-link">Compare</a>
															</div>
														</div>

													</div>
												</div><!-- /.product-inner -->
											</div><!-- /.product-outer -->

										</li><!-- /.products -->
									</ul>
								</div>
							</div><!-- #home-v1-product-cards-careousel -->
						</section>

						<section class="section-product-cards-carousel" >
							<header><h2 class="h1">Top rated in this category</h2></header>
							<div id="home-v1-product-cards-careousel">
								<div class="woocommerce columns-2 home-v1-product-cards-carousel product-cards-carousel owl-carousel">

									<ul class="products columns-2">
										<li class="product product-card first">

											<div class="product-outer">
												<div class="media product-inner">

													<a class="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
														<img class="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/5.jpg" alt="">

													</a>

													<div class="media-body">
														<span class="loop-product-categories">
															<a href="product-category.html" rel="tag">Printers</a>
														</span>

														<a href="single-product.html">
															<h3>Full Color LaserJet Pro  M452dn</h3>
														</a>

														<div class="price-add-to-cart">
															<span class="price">
																<span class="electro-price">
																	<ins><span class="amount"> $3,788.00</span></ins>
																	<del><span class="amount">$4,780.00</span></del>
																	<span class="amount"> </span>
																</span>
															</span>

															<a href="cart.html" class="button add_to_cart_button">Add to cart</a>
														</div><!-- /.price-add-to-cart -->

														<div class="hover-area">
															<div class="action-buttons">

																<a href="#" class="add_to_wishlist">
																Wishlist</a>

																<a href="#" class="add-to-compare-link">Compare</a>
															</div>
														</div>

													</div>
												</div><!-- /.product-inner -->
											</div><!-- /.product-outer -->

										</li><!-- /.products -->
										<li class="product product-card last">

											<div class="product-outer">
												<div class="media product-inner">

													<a class="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
														<img class="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/6.jpg" alt="">

													</a>

													<div class="media-body">
														<span class="loop-product-categories">
															<a href="product-category.html" rel="tag">Peripherals</a>
														</span>

														<a href="single-product.html">
															<h3>External SSD USB 3.1  750 GB</h3>
														</a>

														<div class="price-add-to-cart">
															<span class="price">
																<span class="electro-price">
																	<ins><span class="amount"> </span></ins>
																	<span class="amount"> $600</span>
																</span>
															</span>

															<a href="cart.html" class="button add_to_cart_button">Add to cart</a>
														</div><!-- /.price-add-to-cart -->

														<div class="hover-area">
															<div class="action-buttons">

																<a href="#" class="add_to_wishlist">
																Wishlist</a>

																<a href="#" class="add-to-compare-link">Compare</a>
															</div>
														</div>

													</div>
												</div><!-- /.product-inner -->
											</div><!-- /.product-outer -->

										</li><!-- /.products -->
									</ul>
									<ul class="products columns-2">
										<li class="product product-card first">

											<div class="product-outer">
												<div class="media product-inner">

													<a class="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
														<img class="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/1.jpg" alt="">

													</a>

													<div class="media-body">
														<span class="loop-product-categories">
															<a href="product-category.html" rel="tag">Smartphones</a>
														</span>

														<a href="single-product.html">
															<h3>Tablet Thin EliteBook  Revolve 810 G6</h3>
														</a>

														<div class="price-add-to-cart">
															<span class="price">
																<span class="electro-price">
																	<ins><span class="amount"> $3,788.00</span></ins>
																	<del><span class="amount">$4,780.00</span></del>
																	<span class="amount"> </span>
																</span>
															</span>

															<a href="cart.html" class="button add_to_cart_button">Add to cart</a>
														</div><!-- /.price-add-to-cart -->

														<div class="hover-area">
															<div class="action-buttons">

																<a href="#" class="add_to_wishlist">
																Wishlist</a>

																<a href="#" class="add-to-compare-link">Compare</a>
															</div>
														</div>

													</div>
												</div><!-- /.product-inner -->
											</div><!-- /.product-outer -->

										</li><!-- /.products -->
										<li class="product product-card last">

											<div class="product-outer">
												<div class="media product-inner">

													<a class="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
														<img class="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/6.jpg" alt="">

													</a>

													<div class="media-body">
														<span class="loop-product-categories">
															<a href="product-category.html" rel="tag">Peripherals</a>
														</span>

														<a href="single-product.html">
															<h3>External SSD USB 3.1  750 GB</h3>
														</a>

														<div class="price-add-to-cart">
															<span class="price">
																<span class="electro-price">
																	<ins><span class="amount"> $3,788.00</span></ins>
																	<del><span class="amount">$4,780.00</span></del>
																	<span class="amount"> </span>
																</span>
															</span>

															<a href="cart.html" class="button add_to_cart_button">Add to cart</a>
														</div><!-- /.price-add-to-cart -->

														<div class="hover-area">
															<div class="action-buttons">

																<a href="#" class="add_to_wishlist">
																Wishlist</a>

																<a href="#" class="add-to-compare-link">Compare</a>
															</div>
														</div>

													</div>
												</div><!-- /.product-inner -->
											</div><!-- /.product-outer -->

										</li><!-- /.products -->
									</ul>
								</div>
							</div><!-- #home-v1-product-cards-careousel -->
						</section>

					</main><!-- #main -->
				</div><!-- #primary -->

				<div id="sidebar" class="sidebar" role="complementary">
					<aside class="widget woocommerce widget_product_categories electro_widget_product_categories">
						<ul class="product-categories category-single">
							<li class="product_cat">
								<ul class="show-all-cat">
									<li class="product_cat"><span class="show-all-cat-dropdown">Show All Categories</span>
										<ul>
											<li class="cat-item"><a href="product-category.html">GPS &amp; Navi</a> <span class="count">(0)</span></li>
											<li class="cat-item"><a href="product-category.html">Home Entertainment</a> <span class="count">(1)</span></li>
											<li class="cat-item"><a href="product-category.html">Cameras &amp; Photography</a> <span class="count">(5)</span></li>
											<li class="cat-item"><a href="product-category.html">Smart Phones &amp; Tablets</a> <span class="count">(20)</span></li>
											<li class="cat-item"><a href="product-category.html">Video Games &amp; Consoles</a> <span class="count">(3)</span></li>
											<li class="cat-item"><a href="product-category.html">TV &amp; Audio</a> <span class="count">(1)</span></li>
											<li class="cat-item"><a href="product-category.html">Gadgets</a> <span class="count">(3)</span></li>
											<li class="cat-item"><a href="product-category.html">Car Electronic &amp; GPS</a> <span class="count">(0)</span></li>
											<li class="cat-item"><a href="product-category.html">Accessories</a> <span class="count">(11)</span></li>
											<li class="cat-item"><a href="product-category.html">Printers &amp; Ink</a> <span class="count">(1)</span></li>
											<li class="cat-item"><a href="product-category.html">Software</a> <span class="count">(0)</span></li>
											<li class="cat-item"><a href="product-category.html">Office Supplies</a> <span class="count">(0)</span></li>
											<li class="cat-item"><a href="product-category.html">Computer Components</a> <span class="count">(1)</span></li>
										</ul>
									</li>
								</ul>
								<ul>
									<li class="cat-item current-cat"><a href="product-category.html">Laptops &amp; Computers</a> <span class="count">(13)</span>
										<ul class='children'>
											<li class="cat-item"><a href="product-category.html">Laptops</a> <span class="count">(6)</span></li>
											<li class="cat-item"><a href="product-category.html">Ultrabooks</a> <span class="count">(1)</span></li>
											<li class="cat-item"><a href="product-category.html">Computers</a> <span class="count">(0)</span></li>
											<li class="cat-item"><a href="product-category.html">Mac Computers</a> <span class="count">(1)</span></li>
											<li class="cat-item"><a href="product-category.html">All in One</a> <span class="count">(1)</span></li>
											<li class="cat-item"><a href="product-category.html">Servers</a> <span class="count">(1)</span></li>
											<li class="cat-item"><a href="product-category.html">Peripherals</a> <span class="count">(1)</span></li>
											<li class="cat-item"><a href="product-category.html">Gaming</a> <span class="count">(1)</span></li>
											<li class="cat-item"><a href="product-category.html">Accessories</a> <span class="count">(2)</span></li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</aside>
					<aside class="widget widget_text">
						<div class="textwidget">
							<a href="#">
								<img src="assets/images/banner/ad-banner-sidebar.jpg" alt="Banner"></a>
							</div>
						</aside>
						<aside class="widget widget_products">
							<h3 class="widget-title">Latest Products</h3>
							<ul class="product_list_widget">
								<li>
									<a href="single-product.html" title="Notebook Black Spire V Nitro  VN7-591G">
										<img width="180" height="180" src="assets/images/product-category/1.jpg" alt="" class="wp-post-image"/><span class="product-title">Notebook Black Spire V Nitro  VN7-591G</span>
									</a>
									<span class="electro-price"><ins><span class="amount">&#36;1,999.00</span></ins> <del><span class="amount">&#36;2,299.00</span></del></span>
								</li>

								<li>
									<a href="single-product.html" title="Tablet Thin EliteBook  Revolve 810 G6">
										<img width="180" height="180" src="assets/images/product-category/2.jpg" alt="" class="wp-post-image"/><span class="product-title">Tablet Thin EliteBook  Revolve 810 G6</span>
									</a>
									<span class="electro-price"><span class="amount">&#36;1,300.00</span></span>
								</li>

								<li>
									<a href="single-product.html" title="Notebook Widescreen Z51-70  40K6013UPB">
										<img width="180" height="180" src="assets/images/product-category/3.jpg" alt="" class="wp-post-image"/><span class="product-title">Notebook Widescreen Z51-70  40K6013UPB</span>
									</a>
									<span class="electro-price"><span class="amount">&#36;1,100.00</span></span>
								</li>

								<li>
									<a href="single-product.html" title="Notebook Purple G952VX-T7008T">
										<img width="180" height="180" src="assets/images/product-category/4.jpg" alt="" class="wp-post-image"/><span class="product-title">Notebook Purple G952VX-T7008T</span>
									</a>
									<span class="electro-price"><span class="amount">&#36;2,780.00</span></span>
								</li>
							</ul>
						</aside>
					</div>

				</div><!-- .container -->
			</div><!-- #content -->
		</div>
	</template>
	<script>
		import axios from 'axios'
		export default {
			data() {
				return {
					category: ''
				}
			},
			methods: {
				getCategories() {
					axios.get('./category.js').then(response => {
						this.category = response.data;
					})
				}	
			},
			mounted() {
				this.getCategories();
			}

		}
	</script>