<template>
    <div>
            <div class="body-inner">
	<div>
	<Header/>
	</div>
	<div id="banner-area">
		<img src="images/banner/banner2.jpg" alt ="" />
		<div class="parallax-overlay"></div>
			<!-- Subpage title start -->
			<div class="banner-title-content">
	        	<div class="text-center">
		        	<h2>Our Team</h2>
		        	<ul class="breadcrumb">
			            <li>Home</li>
			            <li>Pages</li>
			            <li><a href="#"> Our Team</a></li>
		          	</ul>
	          	</div>
          	</div><!-- Subpage title end -->
	</div><!-- Banner area end -->

	
	
	<section class="call-to-action">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h3>Join with BizCraft and Give Your Website a Brand New Look</h3>
					<a href="#" class="pull-right btn btn-primary white">Purchase Now</a>
				</div>
			</div>
		</div>
	</section>
	<div>
	<MaincontainerTeam/>
	</div>
	<Footer1Service/>
	<Footer2Service/>
    </div>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import MaincontainerTeam from "@/components/MaincontainerTeam.vue";
import Footer1Service from "@/components/Footer1Service.vue"
import Footer2Service from "@/components/Footer2Service.vue"
export default {
  components: {
    Header,
	MaincontainerTeam,
	Footer1Service,
	Footer2Service,
  }
};
</script>