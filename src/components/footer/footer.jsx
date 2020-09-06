import React from "react";
import { List, Button } from "semantic-ui-react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="ak-footer body-padding">
      <div className="ak-footer-container">
        <div className="ak-footer-section">
          <div className="ak-footer-section-header">About Us</div>
          <List link>
            <List.Item as="a">Anti-Scam</List.Item>
            <List.Item as="a">Terms</List.Item>
            <List.Item as="a">FAQ</List.Item>
            <List.Item as="a">Privacy</List.Item>
          </List>
        </div>
        <div className="ak-footer-section">
          <div className="ak-footer-section-header">Contact & Sitemap</div>
          <List link>
            <List.Item as="a">Contact Us</List.Item>
            <List.Item as="a">Sitemap</List.Item>
            <List.Item as="a">Countries</List.Item>
          </List>
        </div>
        <div className="ak-footer-section">
          <div className="ak-footer-section-header">My Account</div>
          <List link>
            <List.Item as="a">Log In</List.Item>
            <List.Item as="a">Register</List.Item>
          </List>
        </div>
        <div className="ak-footer-section">
          <div className="ak-footer-section-header">Follow us on</div>
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="google plus" icon="google plus" />
        </div>
      </div>
      <div className="ak-footer-copyrights">
        © 2020 LaraClassified. All Rights Reserved. Powered by Bedigit.
      </div>
    </div>
  );
};

export default Footer;
