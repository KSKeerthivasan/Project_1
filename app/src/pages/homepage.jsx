import React from 'react';

function Homepage() {
  return (
    <div className="homepage">
      <style>{`
        .homepage {
          font-family: Arial, sans-serif;
          color: #2c2c2c;
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }
        .intro {
          text-align: center;
          margin-bottom: 40px;
        }
        .highlight {
          color: #913d8a;
        }
        .cards {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 20px;
        }
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          width: 45%;
          overflow: hidden;
        }
        .image {
          height: 180px;
          background-size: cover;
          background-position: center;
        }
        .seller-img {
          background-image: url('/images/seller.png'); /* Update with real path */
        }
        .vendor-img {
          background-image: url('/images/vendor.png'); /* Update with real path */
        }
        .content {
          padding: 20px;
        }
        .content ul {
          list-style: none;
          padding-left: 0;
        }
        .content li {
          margin: 6px 0;
        }
        .btn {
          margin-top: 15px;
          padding: 10px 15px;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
        }
        .orange {
          background-color: #f9a825;
          color: #fff;
        }
        .purple {
          background-color: #6a1b9a;
          color: #fff;
        }
        .why-choose {
          text-align: center;
          margin-top: 60px;
        }
        .features {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          margin-top: 30px;
          gap: 20px;
        }
        .feature {
          width: 30%;
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .icon-box {
          font-size: 30px;
          margin-bottom: 10px;
        }
        .orange-icon {
          color: #f9a825;
        }
        .purple-icon {
          color: #6a1b9a;
        }
        @media (max-width: 768px) {
          .cards, .features {
            flex-direction: column;
            align-items: center;
          }
          .card, .feature {
            width: 90%;
          }
        }
      `}</style>

      <section className="intro">
        <h1><span className="highlight">Choose Your Path</span></h1>
        <p>
          Join our marketplace and start growing your business today.
          Whether you're an established seller or a mobile street vendor,
          we have the perfect solution for you.
        </p>
      </section>

      <section className="cards">
        <div className="card seller">
          <div className="image seller-img"></div>
          <div className="content">
            <h2>Seller</h2>
            <p>Perfect for established businesses looking to expand their online presence with professional tools and analytics.</p>
            <ul>
              <li>✅ Professional storefront setup</li>
              <li>✅ Advanced inventory management</li>
              <li>✅ Detailed sales analytics</li>
              <li>✅ Customer relationship tools</li>
              <li>✅ Marketing automation</li>
            </ul>
            <button className="btn orange">Get Started as Seller →</button>
          </div>
        </div>

        <div className="card vendor">
          <div className="image vendor-img"></div>
          <div className="content">
            <h2>Street Vendor</h2>
            <p>Ideal for mobile vendors and food trucks wanting to connect with customers and manage orders on the go.</p>
            <ul>
              <li>✅ Mobile-first design</li>
              <li>✅ Location-based services</li>
              <li>✅ Quick-order processing</li>
              <li>✅ Real-time notifications</li>
              <li>✅ Flexible payment options</li>
            </ul>
            <button className="btn purple">Get Started as Street Vendor →</button>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose Our Platform?</h2>
        <div className="features">
          <div className="feature">
            <div className="icon-box orange-icon">⚙️</div>
            <h3>Fast Setup</h3>
            <p>Get your business online in minutes with our streamlined onboarding process.</p>
          </div>
          <div className="feature">
            <div className="icon-box purple-icon">🧰</div>
            <h3>Business Tools</h3>
            <p>Access professional tools designed specifically for your business type.</p>
          </div>
          <div className="feature">
            <div className="icon-box orange-icon">📈</div>
            <h3>Grow Revenue</h3>
            <p>Increase your sales with our proven marketing and customer acquisition tools.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;