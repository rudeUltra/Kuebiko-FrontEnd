import React from 'react';

function Footer() {
    return (
        <footer class="footer-bs footer-transperent mt-5" data-aos="fade-up" >
        <div class="row">
        	<div class="col-md-3 footer-brand animated fadeInLeft">
            	<h2>Novelia</h2>
                <p>Novelia acts as platform for for its users to read and enjoys contnet from their favorite autors and also lets them create and share thier own content.</p>
                <p>© 2022 Novelia, All rights reserved</p>
            </div>
        	<div class="col-md-4 footer-nav animated fadeInUp">
            	<h4>Menu —</h4>
            	<div class="col-md-6">
                    <ul class="pages">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Create</a></li>
                        <li><a href="#">Browse</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            	<div class="col-md-6">
                    <ul class="list">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        	<div class="col-md-2 footer-social animated fadeInDown">
            	<h4>Follow Us</h4>
            	<ul>
                	<li><a href="#">Facebook</a></li>
                	<li><a href="#">Twitter</a></li>
                	<li><a href="#">Instagram</a></li>
                </ul>
            </div>
        	<div class="col-md-3 footer-ns animated fadeInRight">
            	<h4>Newsletter</h4>
                <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>

                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search for..." />
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope" /></button>
                      </span>
                    </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
