export default function Home() {
	return (
    <>
  <div id="login-overlay" />
  <div id="login-form">
    <form>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
  <div className="search-section">
    <div className="container">
      <div className="row">
        <div className="search-group">
          <form className="control-form">
            <select className="search-filter" id="category">
              <option value="all">Tất cả</option>
              <option value="category1">Boardgame</option>
              <option value="category2">Tin tức</option>
              <option value="category3">Video</option>
            </select>
            <div className="search-area">
              <input
                className="search-bar"
                type="text"
                id="search"
                placeholder="Search..."
              />
              <div id="results" />
            </div>
          </form>
          <button
            className=" search-button btn submit bg-primary text-white btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="search-section-mobile">
    <div className="container">
      <div className="row">
        <div className="search-group-mobile">
          <form className="control-form-mobile">
            <select className="col-12 search-filter-mobile" id="category">
              <option value="all">Tất cả</option>
              <option value="category1">Boardgame</option>
              <option value="category2">Tin tức</option>
              <option value="category3">Video</option>
            </select>
            <div className="col-12 search-area-mobile">
              <input
                className="col-12 search-bar-mobile"
                type="text"
                id="search"
                placeholder="Search..."
              />
              <div id="results mobile" />
            </div>
          </form>
          <button
            className="col-12 search-button-mobile btn submit bg-primary text-white btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="hero-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="tabs">
            <button className="tablink active" onclick="openTab(event, 'tab1')">
              Game hot
            </button>
            <button className="tablink" onclick="openTab(event, 'tab2')">
              Game mới nhất
            </button>
            <button className="tablink" onclick="openTab(event, 'tab3')">
              Game sắp ra mắt
            </button>
            <div className="space" />
          </div>
          <div id="tab1" className="tabcontent active">
            <div className="col-12 slider-main-card">
              <div className="primary-background-image" />
              <div className="thumbnail">
                <img
                  src="images/image 5.png"
                  style={{ width: 300, height: 400 }}
                  alt=""
                />
              </div>
              <div className="game-description">
                <div className="game-name"> Starwar</div>
                <div className="rating">Xếp hạng: 7.9</div>
                <div className="game-info">
                  <ul>
                    <li className="player">1-2 người chơi</li>
                    <li className="time">30 phút chơi</li>
                    <li className="age">Độ tuổi: 12+</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 slider-main-card-mobile">
              <div className="col-12 background-wrapper-mobile">
                <div className="primary-background-image" />
                <div className="thumbnail">
                  <img
                    src="images/image 5.png"
                    style={{ width: 300, height: 400 }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 game-description-mobile">
                <div className="game-name-mobile"> Starwar</div>
                <div className="rating-mobile">Xếp hạng: 7.9</div>
                <div className="col-12 game-info-mobile">
                  <ul>
                    <li className="col-12 player">1-2 người chơi</li>
                    <li className="col-12 time">30 phút chơi</li>
                    <li className="col-12 age">Độ tuổi: 12+</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="slider-sub-card">
              <div className="slide-navigator">
                <button className="slide-button slider-button-prev">
                  <i className="fa-solid fa-angle-left" />
                </button>
                <button className="slide-button slider-button-next">
                  <i className="fa-solid fa-angle-right" />
                </button>
              </div>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide card">
                    <a href="#">
                      <img
                        src="./images/image 7.png"
                        style={{ height: 150 }}
                        alt=""
                      />
                      <div className="card-text">
                        <h3 className="card-title">2 -- Stationfall</h3>
                        <p className="card-description">
                          Một trò chơi tống tiền và phản bội, giết người và hỗn
                          loạn, nguy hiểm và hủy diệt.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide card">
                    <a href="#">
                      <img
                        src="./images/image 7.png"
                        style={{ height: 150 }}
                        alt=""
                      />
                      <div className="card-text">
                        <h3 className="card-title">2 -- Stationfall</h3>
                        <p className="card-description">
                          Một trò chơi tống tiền và phản bội, giết người và hỗn
                          loạn, nguy hiểm và hủy diệt.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide card">
                    <a href="#">
                      <img
                        src="./images/image 7.png"
                        style={{ height: 150 }}
                        alt=""
                      />
                      <div className="card-text">
                        <h3 className="card-title">2 -- Stationfall</h3>
                        <p className="card-description">
                          Một trò chơi tống tiền và phản bội, giết người và hỗn
                          loạn, nguy hiểm và hủy diệt.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide card">
                    <a href="#">
                      <img
                        src="./images/image 7.png"
                        style={{ height: 150 }}
                        alt=""
                      />
                      <div className="card-text">
                        <h3 className="card-title">2 -- Stationfall</h3>
                        <p className="card-description">
                          Một trò chơi tống tiền và phản bội, giết người và hỗn
                          loạn, nguy hiểm và hủy diệt.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide card">
                    <a href="#">
                      <img
                        src="./images/image 7.png"
                        style={{ height: 150 }}
                        alt=""
                      />
                      <div className="card-text">
                        <h3 className="card-title">2 -- Stationfall</h3>
                        <p className="card-description">
                          Một trò chơi tống tiền và phản bội, giết người và hỗn
                          loạn, nguy hiểm và hủy diệt.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide card">
                    <a href="#">
                      <img
                        src="./images/image 7.png"
                        style={{ height: 150 }}
                        alt=""
                      />
                      <div className="card-text">
                        <h3 className="card-title">2 -- Stationfall</h3>
                        <p className="card-description">
                          Một trò chơi tống tiền và phản bội, giết người và hỗn
                          loạn, nguy hiểm và hủy diệt.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide card">
                    <a href="#">
                      <img
                        src="./images/image 7.png"
                        style={{ height: 150 }}
                        alt=""
                      />
                      <div className="card-text">
                        <h3 className="card-title">2 -- Stationfall</h3>
                        <p className="card-description">
                          Một trò chơi tống tiền và phản bội, giết người và hỗn
                          loạn, nguy hiểm và hủy diệt.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide card">
                    <a href="#">
                      <img
                        src="./images/image 7.png"
                        style={{ height: 150 }}
                        alt=""
                      />
                      <div className="card-text">
                        <h3 className="card-title">2 -- Stationfall</h3>
                        <p className="card-description">
                          Một trò chơi tống tiền và phản bội, giết người và hỗn
                          loạn, nguy hiểm và hủy diệt.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide card">
                    <a href="#">
                      <img
                        src="./images/image 7.png"
                        style={{ height: 150 }}
                        alt=""
                      />
                      <div className="card-text">
                        <h3 className="card-title">2 -- Stationfall</h3>
                        <p className="card-description">
                          Một trò chơi tống tiền và phản bội, giết người và hỗn
                          loạn, nguy hiểm và hủy diệt.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab2" className="tabcontent">
            <div className="slider-main-card">
              <div className="background-image">
                <img
                  src="images/image 6.png"
                  style={{ width: 1300, height: 500 }}
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img
                  src="images/image 5.png"
                  style={{ width: 300, height: 400 }}
                  alt=""
                />
              </div>
              <div className="game-description">
                <div className="game-name"> Starwar</div>
                <div className="rating">Xếp hạng: 7.9</div>
                <div className="game-info">
                  <ul>
                    <li className="player">1-2 người chơi</li>
                    <li className="time">30 phút chơi</li>
                    <li className="age">Độ tuổi: 12+</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="slider-sub-card">
              <div className="slide-navigator">
                <button className="slide-button slider-button-prev">
                  <i className="fa-solid fa-angle-left" />
                </button>
                <button className="slide-button slider-button-next">
                  <i className="fa-solid fa-angle-right" />
                </button>
              </div>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab3" className="tabcontent">
            <div className="slider-main-card">
              <div className="background-image">
                <img
                  src="images/image 6.png"
                  style={{ width: 1300, height: 500 }}
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img
                  src="images/image 5.png"
                  style={{ width: 300, height: 400 }}
                  alt=""
                />
              </div>
              <div className="game-description">
                <div className="game-name"> Starwar</div>
                <div className="rating">Xếp hạng: 7.9</div>
                <div className="game-info">
                  <ul>
                    <li className="player">1-2 người chơi</li>
                    <li className="time">30 phút chơi</li>
                    <li className="age">Độ tuổi: 12+</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="slider-sub-card">
              <div className="slide-navigator">
                <button className="slide-button slider-button-prev">
                  <i className="fa-solid fa-angle-left" />
                </button>
                <button className="slide-button slider-button-next">
                  <i className="fa-solid fa-angle-right" />
                </button>
              </div>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide card">
                    <img
                      src="./images/image 7.png"
                      style={{ height: 150 }}
                      alt=""
                    />
                    <div className="card-text">
                      <h3 className="card-title">2 -- Stationfall</h3>
                      <p className="card-description">
                        Một trò chơi tống tiền và phản bội, giết người và hỗn
                        loạn, nguy hiểm và hủy diệt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="news-section">
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-8 offset-1 ">
          <div className="section-header">Tin tức nổi bật</div>
        </div>
        <div className="col-3 col-md-2">
          <div className="section-nav">
            Xem tất cả <i className="fa-solid fa-angle-right" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <a href="https://www.google.com/">
            <div className="news-main-card">
              <div className="news-header">
                <div className="news-thumbnail">
                  <img src="./images/image 9.png" alt="" />
                </div>
                <div className="news-header-text">
                  <div className="news-heading">
                    Thống trị đường băng tại Versailles, ràng buộc đối thủ của
                    bạn và chơi cờ ít hơn
                  </div>
                  <div className="author">W. Eric Martin </div>
                </div>
              </div>
              <div className="news-description">
                Trận chiến Versailles đã giới thiệu cho tôi một sự kiện mà trước
                đây tôi không hề hay biết và tôi yêu thích khái niệm trò chơi
                hóa sự kiện này đến mức tôi muốn nêu bật nó như một nguồn cảm
                hứng cho những người khác.
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          <div className="sub-news-container">
            <a href="https://www.google.com/">
              <div className="sub-news-card">
                <div className="sub-news-thumbnail">
                  <img src="./images/image 10.png" alt="" />
                </div>
                <div className="sub-news-text">
                  <div className="sub news-heading">
                    Nhóm động vật, chơi bài Poker và du lịch ở Colorado và
                    Moominvalley
                  </div>
                  <div className="author">W. Eric Martin </div>
                </div>
              </div>
            </a>
          </div>
          <div className="sub-news-container">
            <a href="https://www.google.com/">
              <div className="sub-news-card">
                <div className="sub-news-thumbnail">
                  <img src="./images/image 10.png" alt="" />
                </div>
                <div className="sub-news-text">
                  <div className="sub news-heading">
                    Nhóm động vật, chơi bài Poker và du lịch ở Colorado và
                    Moominvalley
                  </div>
                  <div className="author">W. Eric Martin </div>
                </div>
              </div>
            </a>
          </div>
          <div className="sub-news-container">
            <a href="https://www.google.com/">
              <div className="sub-news-card">
                <div className="sub-news-thumbnail">
                  <img src="./images/image 10.png" alt="" />
                </div>
                <div className="sub-news-text">
                  <div className="sub news-heading">
                    Nhóm động vật, chơi bài Poker và du lịch ở Colorado và
                    Moominvalley
                  </div>
                  <div className="author">W. Eric Martin </div>
                </div>
              </div>
            </a>
          </div>
          <div className="sub-news-container-bottom">
            <a href="https://www.google.com/">
              <div className="sub-news-card">
                <div className="sub-news-thumbnail">
                  <img src="./images/image 10.png" alt="" />
                </div>
                <div className="sub-news-text">
                  <div className="sub news-heading">
                    Nhóm động vật, chơi bài Poker và du lịch ở Colorado và
                    Moominvalley
                  </div>
                  <div className="author">W. Eric Martin </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="video-section">
    <div className="container">
      <div className="row">
        <div className="col-8 offset-1 ">
          <div className="section-header">Video hot</div>
        </div>
        <div className="col-2">
          <div className="section-nav">
            Xem tất cả <i className="fa-solid fa-angle-right" />
          </div>
        </div>
      </div>
      <div className="video-card">
        <div className="row">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
            <div className="item">
              <div className="video-thumbnail">
                <img src="./images/video1.png" alt="" />
              </div>
              <div className="video-heading">
                Ark Nova - GameNight! Se10 Ep43 - How to Play and Playthrough
              </div>
              <div className="author">heccubus</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Import axios*/}
  {/* Import js bootstrap*/}
</>

  )
}
