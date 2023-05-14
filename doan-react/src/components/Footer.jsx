export default function Footer() {
	return (
        <footer>
        <div className="site-footer">
          <div className="mid-footer">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                  <h4 className="footer-title">Về chúng tôi</h4>
                  <div className="collaps">
                    <ul className="list-menu">
                      <li className="li_menu">Thông tin</li>
                      <li className="li_menu">Liên hệ</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
                  <h4 className="footer-title">Trợ giúp</h4>
                  <div className="collaps">
                    <ul className="list-menu">
                      <li className="li_menu">FAQ</li>
                      <li className="li_menu">Hướng dẫn</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 offset-lg-2 social_footer">
                  <h4 className="title-menu icon_none_first">
                    <a>Kết nối với chúng tôi</a>
                  </h4>
                  <ul className="follow_option">
                    <li className="li_menu">
                      <a
                        href="https://www.facebook.com/boardgamegarden"
                        title="Theo dõi Facebook Board Game Garden"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="li_menu">
                      <a href="#" title="Theo dõi Twitter Board Game Garden">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="li_menu">
                      <a href="#" title="Theo dõi Google Plus Board Game Garden">
                        <i className="fab fa-google" />
                      </a>
                    </li>
                    <li className="li_menu">
                      <a href="#" title="Theo dõi Youtube Board Game Garden">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li className="li_menu">
                      <a href="#" title="Theo dõi Instagam Board Game Garden">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
	);
}